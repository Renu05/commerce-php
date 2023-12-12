"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[55921],{27237:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return u},default:function(){return p}});var a=n(87462),o=n(45987),r=(n(35776),n(3905)),s=n(91515);const i=["components"],u={},c=(d="InlineAlert",function(t){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",t)});var d;const l={_frontmatter:u},m=s.Z;function p(t){let{components:e}=t,n=(0,o.Z)(t,i);return(0,r.mdx)(m,(0,a.Z)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"add-extension-attributes-to-entities"},"Add extension attributes to entities"),(0,r.mdx)("p",null,"Third-party developers cannot change the API data interfaces defined in the Adobe Commerce and Magento Open Source code. However, most of these entities have a feature called extension attributes. Check the interface for the methods ",(0,r.mdx)("inlineCode",{parentName:"p"},"getExtensionAttributes()")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"setExtensionAttributes()")," to determine if they are available for the entity."),(0,r.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"We will demonstrate how to add extension attributes to a Product entity, Product Repository and Web Api example."),(0,r.mdx)("p",null,"In order to retrieve a product or a list of products from the API, you need to make an API request to the appropriate service (the Product Repository in this case).\nThe response to these requests will return objects with the following structure:"),(0,r.mdx)("h2",{id:"product-response"},"Product response"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},"<product>\n    <id>1</id>\n    <sku>some-sku</sku>\n    <custom_attributes>\x3c!-- Custom Attributes Data --\x3e</custom_attributes>\n    <extension_attributes>\x3c!-- Here should we add extension attributes data --\x3e</extension_attributes>\n</product>\n")),(0,r.mdx)("h2",{id:"product-list-response"},"Product list response:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},"<products>\n    <item>\n        <id>1</id>\n        <sku>some-sku</sku>\n        <custom_attributes>\x3c!-- Custom Attributes Data --\x3e</custom_attributes>\n        <extension_attributes>\x3c!-- Here should we add extension attributes data --\x3e</extension_attributes>\n    </item>\n    <item>\n        <id>2</id>\n        <sku>some-sku-2</sku>\n        <custom_attributes>\x3c!-- Custom Attributes Data --\x3e</custom_attributes>\n        <extension_attributes>\x3c!-- Here should we add extension attributes data --\x3e</extension_attributes>\n    </item>\n</products>\n")),(0,r.mdx)("h2",{id:"add-plugin-to-product-repository"},"Add plugin to product repository"),(0,r.mdx)("p",null,"In order to add extension attributes, we need to use an after plugin on Product Repository.\nThe plugin should be declared for the methods: ",(0,r.mdx)("inlineCode",{parentName:"p"},"save"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"get")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"getList"),"."),(0,r.mdx)("p",null,"We can add scalar and non-scalar extension attributes.\nScalar is a simple attribute.\nNon-scalar attributes can be represented by Data Object."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Catalog\\Api\\ProductRepositoryInterface;\nuse Magento\\Catalog\\Api\\Data\\ProductInterface;\n\npublic function afterGet\n(\n    ProductRepositoryInterface $subject,\n    ProductInterface $entity\n) {\n    $ourCustomData = $this->customDataRepository->get($entity->getId());\n\n    $extensionAttributes = $entity->getExtensionAttributes(); /** get current extension attributes from entity **/\n    $extensionAttributes->setOurCustomData($ourCustomData);\n    $entity->setExtensionAttributes($extensionAttributes);\n\n    return $entity;\n}\n")),(0,r.mdx)("p",null,"This is the simplest way to add extension attributes without causing a conflict:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"We get the entity's extension attributes, if they are already set."),(0,r.mdx)("li",{parentName:"ul"},"We add our extension attribute."),(0,r.mdx)("li",{parentName:"ul"},"Finally set the extension attribute on the entity with ours included.")),(0,r.mdx)("p",null,"Function ",(0,r.mdx)("inlineCode",{parentName:"p"},"afterGetList")," is similar to ",(0,r.mdx)("inlineCode",{parentName:"p"},"afterGet"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Catalog\\Api\\ProductRepositoryInterface;\nuse Magento\\Catalog\\Api\\Data\\ProductSearchResultsInterface;\n\npublic function afterGetList(\n    ProductRepositoryInterface $subject,\n    ProductSearchResultsInterface $searchResults\n) : ProductSearchResultsInterface {\n    $products = [];\n    foreach ($searchResults->getItems() as $entity) {\n        $ourCustomData = $this->customDataRepository->get($entity->getId());\n\n        $extensionAttributes = $entity->getExtensionAttributes();\n        $extensionAttributes->setOurCustomData($ourCustomData);\n        $entity->setExtensionAttributes($extensionAttributes);\n\n        $products[] = $entity;\n    }\n    $searchResults->setItems($products);\n    return $searchResults;\n}\n")),(0,r.mdx)(c,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"To add extension attributes to an entity without plugins, use the ",(0,r.mdx)("inlineCode",{parentName:"p"},"extensionActions")," argument of ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\EntityManager\\Operation\\ExtensionPool"),". See ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Catalog/Model/ProductRepository.php"},"\\Magento\\Catalog\\Model\\ProductRepository::getList()")," as an example of an implementation."),(0,r.mdx)("p",null,"Likewise, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"afterSave")," plugin should manipulate the entity data before returning it:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Catalog\\Api\\Data\\ProductInterface;\nuse Magento\\Catalog\\Api\\ProductRepositoryInterface;\n\npublic function afterSave\n(\n    ProductRepositoryInterface $subject,\n    ProductInterface $result, /** result from the save call **/\n    ProductInterface $entity  /** original parameter to the call **/\n    /** other parameter not required **/\n) {\n    $extensionAttributes = $entity->getExtensionAttributes(); /** get original extension attributes from entity **/\n    $ourCustomData = $extensionAttributes->getOurCustomData();\n    $this->customDataRepository->save($ourCustomData);\n\n    $resultAttributes = $result->getExtensionAttributes(); /** get extension attributes as they exist after save **/\n    $resultAttributes->setOurCustomData($ourCustomData); /** update the extension attributes with correct data **/\n    $result->setExtensionAttributes($resultAttributes);\n\n    return $result;\n}\n")),(0,r.mdx)("p",null,"But if some entity doesn't have implementation to fetch extension attributes, we will always retrieve ",(0,r.mdx)("inlineCode",{parentName:"p"},"null")," and each time when we fetch extension attributes we need to check if they are ",(0,r.mdx)("inlineCode",{parentName:"p"},"null"),". If so, then we need to create them. To avoid such code duplication, we need to create ",(0,r.mdx)("inlineCode",{parentName:"p"},"afterGetExtensionAttributes")," plugin for our entity with extension attributes."),(0,r.mdx)("p",null,"Let's assume the product entity doesn't have any implementation of extension attributes, so our plugin might look like this:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nuse Magento\\Catalog\\Api\\Data\\ProductExtensionInterface;\nuse Magento\\Catalog\\Api\\Data\\ProductInterface;\nuse Magento\\Catalog\\Api\\Data\\ProductExtensionFactory;\n\nclass ProductAttributesLoad\n{\n    /**\n     * @var ProductExtensionFactory\n     */\n    private $extensionFactory;\n\n    /**\n     * @param ProductExtensionFactory $extensionFactory\n     */\n    public function __construct(ProductExtensionFactory $extensionFactory)\n    {\n        $this->extensionFactory = $extensionFactory;\n    }\n\n    /**\n     * Loads product entity extension attributes\n     *\n     * @param ProductInterface $entity\n     * @param ProductExtensionInterface|null $extension\n     * @return ProductExtensionInterface\n     */\n    public function afterGetExtensionAttributes(\n        ProductInterface $entity,\n        ProductExtensionInterface $extension = null\n    ) {\n        if ($extension === null) {\n            $extension = $this->extensionFactory->create();\n        }\n\n        return $extension;\n    }\n}\n\n")),(0,r.mdx)("p",null,"Now we need to bind our plugin to ",(0,r.mdx)("inlineCode",{parentName:"p"},"ProductInterface"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\Catalog\\Api\\Data\\ProductInterface">\n        <plugin name="ProductExtensionAttributeOperations" type="Magento\\Catalog\\Plugin\\ProductAttributesLoad"/>\n    </type>\n</config>\n')),(0,r.mdx)("h2",{id:"configure-extension-attributes"},"Configure extension attributes"),(0,r.mdx)("p",null,"The file that holds these extension attributes must reside under the ",(0,r.mdx)("inlineCode",{parentName:"p"},"/etc")," folder of your module."),(0,r.mdx)("p",null,"For scalar attributes, we can use the following configuration:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">\n    <extension_attributes for="Magento\\Catalog\\Api\\Data\\ProductInterface">\n        <attribute code="first_custom_attribute" type="int" />\n        <attribute code="second_custom_attribute" type="string" />\n    </extension_attributes>\n</config>\n')),(0,r.mdx)("p",null,'Here, the scalar attributes indicate the simple form of attribute representation, such as an integer or a string. Specify the class or interface of the extension attributes inside the "for" attribute of the ',(0,r.mdx)("inlineCode",{parentName:"p"},"<extension_attributes>")," tag. In this case, it is the ProductInterface. The attribute is specified with a unique code and its type."),(0,r.mdx)("p",null,"For non-scalar attributes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">\n    <extension_attributes for="Magento\\Catalog\\Api\\Data\\ProductInterface">\n        <attribute code="our_custom_data" type="Magento\\SomeModule\\Api\\Data\\CustomDataInterface" />\n    </extension_attributes>\n</config>\n')),(0,r.mdx)("p",null,"Here, the non-scalar attributes indicate data objects such as the instance of a class. In the above example, the CustomDataInterface object is added as an extension attribute."),(0,r.mdx)("p",null,"For array extension attributes:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:noNamespaceSchemaLocation="urn:magento:framework:Api/etc/extension_attributes.xsd">\n    <extension_attributes for="Magento\\Catalog\\Api\\Data\\ProductInterface">\n        <attribute code="some_custom_data" type="string[]" />\n    </extension_attributes>\n</config>\n')),(0,r.mdx)("p",null,"The array extension attributes are just an extension of the scalar attributes where a range of values can be represented as an attribute. The ",(0,r.mdx)("inlineCode",{parentName:"p"},"[]")," symbol indicates the attribute type is an array."),(0,r.mdx)("p",null,"The array indicator ",(0,r.mdx)("inlineCode",{parentName:"p"},"[]")," can also be appended to non-scalar types."),(0,r.mdx)("p",null,"In first - scalar - case we will get the next result:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},"<product>\n    <id>1</id>\n    <sku>some-sku</sku>\n    <custom_attributes>\x3c!-- Custom Attributes Data --\x3e</custom_attributes>\n    <extension_attributes>\n        <first_custom_attribute>1</first_custom_attribute>\n        <second_custom_attribute>foo</second_custom_attribute>\n    </extension_attributes>\n</product>\n")),(0,r.mdx)("p",null,"In second, non-scalar one:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},"<product>\n    <id>1</id>\n    <sku>some-sku</sku>\n    <custom_attributes>\x3c!-- Custom Attributes Data --\x3e</custom_attributes>\n    <extension_attributes>\n        <our_custom_data>\n            \x3c!-- fields defined in CustomDataInterface are here --\x3e\n        </our_custom_data>\n    </extension_attributes>\n</product>\n")),(0,r.mdx)("p",null,"In third, array one (in JSON for a change):"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-js"},'{\n  "id": 1,\n  "sku": "some-sku",\n  "custom_attributes": { /* ... custom attribute data ... */ },\n  "extension_attributes": {\n    "some_custom_data": ["value1", "value2", "value3"]\n  }\n}\n')))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-add-attributes-md-600960c5bed60da1e3a4.js.map