"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[92876],{44104:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return r},default:function(){return u}});var t=a(87462),o=a(45987),i=(a(35776),a(3905)),d=a(91515);const l=["components"],r={},m={_frontmatter:r},p=d.Z;function u(e){let{components:n}=e,a=(0,o.Z)(e,l);return(0,i.mdx)(p,(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,i.mdx)("h1",{id:"magento_groupedproduct-module"},"Magento_GroupedProduct module"),(0,i.mdx)("p",null,"This module introduces new product type in the Magento application named Grouped Product.\nIt provides ability to offer several standalone products for sale as a group on the same Product Detail page.\nIt can offer variations of a product, or group them by season or theme to create a coordinated set.\nProducts can be purchased separately or as a set.\nEach product purchased appears in the Shopping Cart as a separate item."),(0,i.mdx)("p",null,"This module extends the existing functionality of Magento_Catalog module by adding new product type."),(0,i.mdx)("h2",{id:"installation-details"},"Installation details"),(0,i.mdx)("p",null,"Before installing this module, note that the Magento_GroupedProduct module is dependent on the following modules:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_Catalog")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_CatalogInventory")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_Sales")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_Quote"))),(0,i.mdx)("p",null,"Before disabling or uninstalling this module, note that the following modules depends on this module:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_GroupedCatalogInventory")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_GroupedProductGraphQl")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"Magento_MsrpGroupedProduct"))),(0,i.mdx)("p",null,"For information about a module installation in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://experienceleague.adobe.com/docs/commerce-operations/installation-guide/tutorials/manage-modules.html"},"Enable or disable modules"),"."),(0,i.mdx)("h2",{id:"structure"},"Structure"),(0,i.mdx)("p",null,(0,i.mdx)("inlineCode",{parentName:"p"},"Pricing/")," - the directory that contains solutions for grouped product price."),(0,i.mdx)("p",null,"For information about a typical file structure of a module in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/build/component-file-structure/#module-file-structure"},"Module file structure"),"."),(0,i.mdx)("h2",{id:"extensibility"},"Extensibility"),(0,i.mdx)("p",null,"Extension developers can interact with the Magento_GroupedProduct module. For more information about the Magento extension mechanism, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/plugins/"},"Magento plugins"),"."),(0,i.mdx)("p",null,(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/dependency-injection/"},"The Magento dependency injection mechanism")," enables you to override the functionality of the Magento_GroupedProduct module."),(0,i.mdx)("h3",{id:"layouts"},"Layouts"),(0,i.mdx)("p",null,"This module introduces the following layouts in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/frontend/layout"),", ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/layout")," and ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/base/layout")," directories:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"view/adminhtml/layout"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_grouped")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_new")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_view_type_grouped")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"groupedproduct_edit_popup")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"groupedproduct_popup_grid")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_new")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_updateqty")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_view")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_new")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_updateqty")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_view")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_view")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"view/frontend/layout"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_rss_feed_renderer_list")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_view_type_grouped")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"checkout_cart_item_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"checkout_onepage_review_item_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_email_order_creditmemo_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_email_order_invoice_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_email_order_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_guest_invoice")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_creditmemo_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_invoice_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_item_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_print_creditmemo_renderers")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"sales_order_print_renderers")))),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"view/base/layout"),":",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"catalog_product_prices"))))),(0,i.mdx)("p",null,"For more information about a layout in Magento 2, see the ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/layouts/"},"Layout documentation"),"."),(0,i.mdx)("h3",{id:"ui-components"},"UI components"),(0,i.mdx)("p",null,"You can extend a grouped product listing updates using the configuration files located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/adminhtml/ui_component")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"grouped_product_listing"))),(0,i.mdx)("p",null,"This module extends widgets ui components the configuration files located in the ",(0,i.mdx)("inlineCode",{parentName:"p"},"view/frontend/ui_component")," directory:"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"widget_recently_compared")),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"widget_recently_viewed"))),(0,i.mdx)("p",null,"For information about a UI component in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/"},"Overview of UI components"),"."),(0,i.mdx)("h3",{id:"public-apis"},"Public APIs"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"\\Magento\\GroupedProduct\\Api\\Data\\GroupedOptionsInterface"),(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"represents ",(0,i.mdx)("inlineCode",{parentName:"li"},"product item id with qty")," of a grouped product")))),(0,i.mdx)("p",null,"For information about a public API in Magento 2, see ",(0,i.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/api-concepts/"},"Public interfaces & APIs"),"."),(0,i.mdx)("h2",{id:"additional-information"},"Additional information"),(0,i.mdx)("p",null,"For more information about creating grouped product, see ",(0,i.mdx)("a",{parentName:"p",href:"https://docs.magento.com/user-guide/catalog/product-create-grouped.html"},"Creating Grouped Product"),"."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-module-reference-beta-module-grouped-product-md-45972673238abfa0d05b.js.map