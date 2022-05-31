"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[7730],{683:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return p}});var n=t(87462),o=t(63366),r=(t(15007),t(64983)),c=t(91515),i=["components"],s={},l={_frontmatter:s},m=c.Z;function p(e){var a=e.components,t=(0,o.Z)(e,i);return(0,r.mdx)(m,(0,n.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"factories"},"Factories"),(0,r.mdx)("p",null,"Factories are service classes that instantiate non-injectable classes, that is, models that represent a database ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/entity"},"entity"),".\nThey create a layer of abstraction between the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ObjectManager")," and business code."),(0,r.mdx)("h2",{id:"relationship-to-objectmanager"},"Relationship to ",(0,r.mdx)("inlineCode",{parentName:"h2"},"ObjectManager")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\ObjectManager")," is the class responsible for instantiating objects in the application.\nAdobe Commerce and Magento Open Source prohibit depending on and directly using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ObjectManager")," in your code."),(0,r.mdx)("p",null,"Factories are an ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/exception"},"exception")," to this rule because they require the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ObjectManager")," to instantiate specific models."),(0,r.mdx)("p",null,"The following example illustrates the relationship between a simple factory and the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ObjectManager"),":"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright © Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\Framework\\App\\Config;\n\nuse Magento\\Framework\\ObjectManagerInterface;\nuse Magento\\Framework\\Simplexml\\Element;\nuse Magento\\Framework\\App\\Config\\Base;\n\nclass BaseFactory\n{\n    /**\n     * @var ObjectManagerInterface\n     */\n    protected $_objectManager;\n\n    /**\n     * @param ObjectManagerInterface $objectManager\n     */\n    public function __construct(ObjectManagerInterface $objectManager)\n    {\n        $this->_objectManager = $objectManager;\n    }\n\n    /**\n     * Create config model\n     *\n     * @param string|Element $sourceData\n     * @return Base\n     */\n    public function create($sourceData = null): Base\n    {\n        return $this->_objectManager->create(Base::class, ['sourceData' => $sourceData]);\n    }\n}\n")),(0,r.mdx)("h2",{id:"writing-factories"},"Writing factories"),(0,r.mdx)("p",null,"Unless you require specific behavior for your factory classes, you do not need to explicitly define them because they are an ",(0,r.mdx)("a",{parentName:"p",href:"code-generation.md"},"automatically generated")," class type.\nWhen you reference a factory in a class constructor, Magento's ",(0,r.mdx)("a",{parentName:"p",href:"object-manager/index.md"},"object manager")," generates the factory class if it does not exist."),(0,r.mdx)("p",null,"Factories follow the naming convention ",(0,r.mdx)("inlineCode",{parentName:"p"},"<class-type>Factory")," where ",(0,r.mdx)("inlineCode",{parentName:"p"},"<class-type>")," is the name of the class the factory instantiates."),(0,r.mdx)("p",null,"For example the automatically generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"Magento\\Cms\\Model\\BlockFactory")," class is a factory that instantiates the class ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Cms/Model/Block.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"Magento\\Cms\\Model\\Block")),"."),(0,r.mdx)("h2",{id:"using-factories"},"Using factories"),(0,r.mdx)("p",null,"You can get the singleton instance of a factory for a specific model using ",(0,r.mdx)("a",{parentName:"p",href:"dependency-injection.md"},"dependency injection"),"."),(0,r.mdx)("p",null,"The following example shows a class getting the ",(0,r.mdx)("inlineCode",{parentName:"p"},"BlockFactory")," instance through the constructor:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"function __construct ( \\Magento\\Cms\\Model\\BlockFactory $blockFactory) {\n    $this->blockFactory = $blockFactory;\n}\n")),(0,r.mdx)("p",null,"Calling the ",(0,r.mdx)("inlineCode",{parentName:"p"},"create()")," method on a factory gives you an instance of its specific class:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"$block = $this->blockFactory->create();\n")),(0,r.mdx)("p",null,"For classes that require parameters, the automatically generated ",(0,r.mdx)("inlineCode",{parentName:"p"},"create()")," function accepts an array of parameters that it passes on to the ",(0,r.mdx)("inlineCode",{parentName:"p"},"ObjectManager")," to create the target class."),(0,r.mdx)("p",null,"The example below shows the construction of a ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\FlagFactory")," object by passing in an array of parameters to a factory:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"$flag = $this->flagFactory->create([\n  'data' =>  ['flag_code' => 'something']\n]);\n")),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"Flag")," class has a ",(0,r.mdx)("inlineCode",{parentName:"p"},"$data")," constructor parameter which corresponds to the data key in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"create")," array above."),(0,r.mdx)("h3",{id:"interfaces"},"Interfaces"),(0,r.mdx)("p",null,"Factories are smart enough to resolve dependencies and allow you to get the correct instance of an interface as defined in your module's ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml"),"."),(0,r.mdx)("p",null,"For example, in the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory"},(0,r.mdx)("inlineCode",{parentName:"a"},"CatalogInventory"))," module, the ",(0,r.mdx)("inlineCode",{parentName:"p"},"di.xml")," file contains the following entry:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-xml"},'<preference for="Magento\\CatalogInventory\\Api\\Data\\StockItemInterface" type="Magento\\CatalogInventory\\Model\\Stock\\Item" />\n')),(0,r.mdx)("p",null,"It instructs the application to use the specific ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Model/Stock/Item.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"Item"))," class wherever the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/CatalogInventory/Api/Data/StockItemInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"StockItemInterface"))," is used.\nWhen a class in that ",(0,r.mdx)("a",{parentName:"p",href:"https://glossary.magento.com/module"},"module")," includes the factory ",(0,r.mdx)("inlineCode",{parentName:"p"},"StockItemInterfaceFactory")," as a dependency, the application generates a factory that is capable of creating the specific ",(0,r.mdx)("inlineCode",{parentName:"p"},"Item")," objects."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-factories-md-206023a0b265a0861403.js.map