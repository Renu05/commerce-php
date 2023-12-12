"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[89696],{97373:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return i},default:function(){return s}});var o=t(87462),m=t(45987),r=(t(35776),t(3905)),n=t(91515);const p=["components"],i={},d={_frontmatter:i},l=n.Z;function s(e){let{components:a}=e,t=(0,m.Z)(e,p);return(0,r.mdx)(l,(0,o.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"magento_quotegraphql-module"},"Magento_QuoteGraphQl module"),(0,r.mdx)("p",null,"This module provides type and resolver information for the GraphQl module\nto generate quote (cart) information endpoints. Also provides endpoints for modifying a quote."),(0,r.mdx)("h2",{id:"installation"},"Installation"),(0,r.mdx)("p",null,"Before installing this module, note that the Magento_QuoteGraphQl is dependent on the following modules:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"Magento_CatalogGraphQl"))),(0,r.mdx)("p",null,"This module does not introduce any database schema modifications or new data."),(0,r.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,r.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,r.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,r.mdx)("p",null,"Extension developers can interact with the Magento_QuoteDownloadableLinks module. For more information about the Magento extension mechanism, see ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plug-ins"),"."),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_QuoteDownloadableLinks module."),(0,r.mdx)("h2",{id:"additional-information"},"Additional information"),(0,r.mdx)("p",null,"You can get more information about ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/"},"GraphQl In Magento 2"),"."),(0,r.mdx)("h3",{id:"graphql-query"},"GraphQl Query"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"cart")," query - retrieve information about a particular cart.\n",(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/queries/cart/"},"Learn more about cart query"),".\n"),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"customerCart")," query - returns the active cart for the logged-in customer. If the cart does not exist, the query creates one.\n",(0,r.mdx)("a",{parentName:"li",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/customer/queries/cart/"},"Learn more about customerCart query"),".")),(0,r.mdx)("h3",{id:"graphql-mutation"},"GraphQl Mutation"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"createEmptyCart")," mutation - creates an empty shopping cart for a guest or logged in customer.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/create-empty-cart/"},"Learn more about createEmptyCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"addSimpleProductsToCart")," mutation - allows you to add any number of simple and group products to the cart at the same time.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/add-simple-products/"},"Learn more about addSimpleProductsToCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"addVirtualProductsToCart")," mutation - allows you to add multiple virtual products to the cart at the same time, but you cannot add other product types with this mutation.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/add-virtual-products/"},"Learn more about addVirtualProductsToCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"applyCouponToCart")," mutation - applies a pre-defined coupon code to the specified cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/apply-coupon/"},"Learn more about applyCouponToCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"removeCouponFromCart")," mutation - removes a previously-applied coupon from the cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/remove-coupon/"},"Learn more about removeCouponFromCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"updateCartItems")," mutation - allows you to modify items in the specified cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/update-items/"},"Learn more about updateCartItems mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"removeItemFromCart")," mutation - deletes the entire quantity of a specified item from the cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/remove-item/"},"Learn more about removeItemFromCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingAddressesOnCart")," mutation - sets one or more shipping addresses on a specific cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-shipping-address/"},"Learn more about setShippingAddressesOnCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setBillingAddressOnCart")," mutation - sets the billing address for a specific cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-billing-address/"},"Learn more about setBillingAddressOnCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setShippingMethodsOnCart")," mutation - sets one or more delivery methods on a cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-shipping-method/"},"Learn more about setShippingMethodsOnCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," mutation - defines which payment method to apply to the cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-payment-method/"},"Learn more about setPaymentMethodOnCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setGuestEmailOnCart")," mutation - assigns email to the guest cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-guest-email/"},"Learn more about setGuestEmailOnCart mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodAndPlaceOrder")," mutation - sets the cart payment method and converts the cart into an order. ",(0,r.mdx)("strong",{parentName:"p"},"This mutation has been deprecated"),". Use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setPaymentMethodOnCart")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutations instead.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/set-payment-place-order/"},"Learn more about setPaymentMethodAndPlaceOrder mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"mergeCarts")," mutation - transfers the contents of a guest cart into the cart of a logged-in customer.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/merge/"},"Learn more about mergeCarts mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"placeOrder")," mutation - converts the cart into an order and returns an order ID.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/place-order/"},"Learn more about placeOrder mutation"),".")),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("p",{parentName:"li"},(0,r.mdx)("inlineCode",{parentName:"p"},"addProductsToCart")," mutation - adds any type of product to the shopping cart.\n",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/webapi/graphql/schema/cart/mutations/add-products/"},"Learn more about addProductsToCart mutation"),"."))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-quote-graph-ql-md-414bdd034c51cdb9b7d2.js.map