
const SHOPIFY_DOMAIN = 'calont-3.myshopify.com';
const STOREFRONT_ACCESS_TOKEN = '469bc3bd283776612a8651a9eec617cb';

const shopifyFetch = async (query: string, variables = {}) => {
  const response = await fetch(`https://${SHOPIFY_DOMAIN}/api/2024-01/graphql.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': STOREFRONT_ACCESS_TOKEN,
    },
    body: JSON.stringify({ query, variables }),
  });
  
  const result = await response.json();
  
  if (result.errors) {
    console.error("Shopify GraphQL Errors:", result.errors);
    throw new Error(result.errors[0].message);
  }
  return result.data;
};

export const fetchAllProducts = async () => {
  const query = `
    query GetProducts {
      products(first: 20) {
        edges {
          node {
            id
            handle
            title
            descriptionHtml
            variants(first: 20) {
              edges {
                node {
                  id
                  title
                  price {
                    amount
                    currencyCode
                  }
                  image {
                    url
                  }
                }
              }
            }
          }
        }
      }
    }
  `;
  
  try {
    const data = await shopifyFetch(query);
    if (!data || !data.products) return [];

    return data.products.edges.map((edge: any) => {
      const p = edge.node;
      return {
        id: p.id,
        handle: p.handle,
        name: p.title,
        description: p.descriptionHtml || '',
        variants: p.variants.edges.map((vEdge: any) => vEdge.node)
      };
    });
  } catch (error) {
    console.error("Failed to fetch catalog from Shopify Storefront API:", error);
    return [];
  }
};

/**
 * Creates a Shopify Cart and returns the checkout URL.
 * Ensure your products are available to the 'Headless' or 'Storefront' app in Shopify Admin.
 */
export const createShopifyCheckout = async (items: { variantId: string, quantity: number }[]) => {
  const query = `
    mutation cartCreate($input: CartInput!) {
      cartCreate(input: $input) {
        cart {
          id
          checkoutUrl
        }
        userErrors {
          field
          message
        }
      }
    }
  `;

  const variables = {
    input: {
      lines: items.map(item => ({
        merchandiseId: item.variantId,
        quantity: item.quantity
      }))
    }
  };

  try {
    const data = await shopifyFetch(query, variables);
    const result = data.cartCreate;
    
    if (result.userErrors && result.userErrors.length > 0) {
      throw new Error(result.userErrors[0].message);
    }
    
    if (!result.cart || !result.cart.checkoutUrl) {
      throw new Error("Shopify returned an empty cart result. Verify product availability.");
    }
    
    return result.cart.checkoutUrl;
  } catch (error) {
    console.error("Shopify Checkout Error:", error);
    throw error;
  }
};
