"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[95613],{68081:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return p},default:function(){return c}});var n=a(87462),l=a(45987),r=(a(35776),a(3905)),d=a(91515);const m=["components"],p={},o=(i="InlineAlert",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.mdx)("div",e)});var i;const s={_frontmatter:p},u=d.Z;function c(e){let{components:t}=e,a=(0,l.Z)(e,m);return(0,r.mdx)(u,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"extension-lifecycle"},"Extension lifecycle"),(0,r.mdx)(o,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,r.mdx)("p",null,"The recommendations laid out below are to be phased out in the future in favor of ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/php/development/components/declarative-schema/#declarative-schema"},"declarative schema")," development approaches."),(0,r.mdx)("p",null,"This topic describes a module's lifecycle and how to create classes that execute code when your module is initialized, upgraded, or uninstalled.\nThese executable classes can perform tasks that set up the database, update data, and clean up data."),(0,r.mdx)("p",null,(0,r.mdx)("em",{parentName:"p"},"Note:")," Theme and language package extensions do not need initialization or uninstallation tasks because they do not install database schemas or update data."),(0,r.mdx)("h2",{id:"lifecycle-guidelines"},"Lifecycle guidelines"),(0,r.mdx)("p",null,"Follow these guidelines when developing your executable classes to have them run during specific lifecycle stages:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"Put your executable class in the ",(0,r.mdx)("inlineCode",{parentName:"li"},"Setup")," directory inside your module's root directory."),(0,r.mdx)("li",{parentName:"ul"},"Use the specific file and class name for your class's target lifecycle stage."),(0,r.mdx)("li",{parentName:"ul"},"Implement the specific class interface and function for your class's target stage."),(0,r.mdx)("li",{parentName:"ul"},"Follow Magento's ",(0,r.mdx)("a",{parentName:"li",href:"../versioning/index.md"},"versioning policy")," when changing your module's version.")),(0,r.mdx)("h2",{id:"schema-initialization-stages"},"Schema initialization stages"),(0,r.mdx)("p",null,"The schema initialization stages are the first set of processes that Adobe Commerce and Magento Open Source run when your module is installed, re-installed, or upgraded."),(0,r.mdx)("h3",{id:"schema-installation"},"Schema installation"),(0,r.mdx)("p",null,"The application executes the schema installation class during your module's initial install.\nIf the ",(0,r.mdx)("inlineCode",{parentName:"p"},"schema_version")," for your module is found in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setup_module")," table, the application skips this stage and proceeds to the ",(0,r.mdx)("a",{parentName:"p",href:"#schema-upgrade"},"schema upgrade")," stage."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name:")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"InstallSchema"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface:")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/InstallSchemaInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"InstallSchemaInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method:")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"install()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," InstallSchema.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\InstallSchemaInterface;\n\nclass InstallSchema implements InstallSchemaInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)\n    {\n        //Install schema logic\n    }\n}\n")),(0,r.mdx)("h3",{id:"schema-upgrade"},"Schema upgrade"),(0,r.mdx)("p",null,"The application executes your module's schema upgrade class when it detects an earlier installation.\nThe purpose of this class is to update the database structure or apply patches."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"UpgradeSchema"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/UpgradeSchemaInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"UpgradeSchemaInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"upgrade()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," UpgradeSchema.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\UpgradeSchemaInterface;\n\nclass UpgradeSchema implements UpgradeSchemaInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function upgrade(SchemaSetupInterface $setup, ModuleContextInterface $context)\n    {\n        //Upgrade schema logic\n    }\n}\n")),(0,r.mdx)("h3",{id:"recurring-schema-event"},"Recurring schema event"),(0,r.mdx)("p",null,"The application executes your module's recurring schema event class after every schema installation or upgrade stage.\nThis class makes final modifications to the database schema after it has been installed or updated."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Recurring"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/InstallSchemaInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"InstallSchemaInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"install()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," Recurring.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\InstallSchemaInterface;\n\nclass Recurring implements InstallSchemaInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function install(SchemaSetupInterface $setup, ModuleContextInterface $context)\n    {\n        //Recurring schema event logic\n    }\n}\n")),(0,r.mdx)("h2",{id:"data-initialization"},"Data initialization"),(0,r.mdx)("p",null,"The application goes through your module's data initialization stages after the schema initialization processes complete."),(0,r.mdx)("h3",{id:"data-installation"},"Data installation"),(0,r.mdx)("p",null,"The application executes the data installation class during your module's initial install unless an existing version entry is found in the database.\nThe purpose of this class is to populate the database with initial data."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"InstallData"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/InstallDataInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"InstallDataInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"install()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," InstallData.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\InstallDataInterface;\n\nclass InstallData implements InstallDataInterface\n{\n    /**\n     * {@inheritdoc}\n     */\n    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)\n    {\n        // Data install logic\n    }\n}\n")),(0,r.mdx)("h3",{id:"data-upgrade"},"Data upgrade"),(0,r.mdx)("p",null,"The application executes the data upgrade class when it detects an earlier version in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"data_version")," field for the module in the ",(0,r.mdx)("inlineCode",{parentName:"p"},"setup_module")," table.\nThe purpose of this class is to fix corrupted data or populate a new data field after a schema change."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"UpgradeData"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/UpgradeDataInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"UpgradeDataInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"upgrade()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," UpgradeData.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\UpgradeDataInterface;\n\nclass UpgradeData implements UpgradeDataInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)\n    {\n        // Data upgrade logic\n    }\n}\n")),(0,r.mdx)("h3",{id:"recurring-data-event"},"Recurring data event"),(0,r.mdx)("p",null,"The application executes your module's recurring data event class after every data installation or upgrade stage.\nThis class makes final modifications to the database store after data has been installed or updated."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"RecurringData"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/InstallDataInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"InstallDataInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"install()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," RecurringData.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\InstallDataInterface;\n\nclass RecurringData implements InstallDataInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function install(ModuleDataSetupInterface $setup, ModuleContextInterface $context)\n    {\n        // Recurring data event logic\n    }\n}\n")),(0,r.mdx)("h2",{id:"database-interface"},"Database interface"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/ModuleDataSetupInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"ModuleDataSetupInterface"))," when you need to do database manipulations.\nIf your installation or upgrade logic spans multiple classes, pass this resource on to other classes that need to modify the database."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/Customer/Setup/Patch/Data/DefaultCustomerGroupsAndAttributes.php"},"Customer module's DefaultCustomerGroupsAndAttributes.php")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nclass DefaultCustomerGroupsAndAttributes implements DataPatchInterface, PatchVersionInterface\n{\n    /**\n     * @var CustomerSetupFactory\n     */\n    private $customerSetupFactory;\n    /**\n     * @var ModuleDataSetupInterface\n     */\n    private $moduleDataSetup;\n    /**\n     * DefaultCustomerGroupsAndAttributes constructor.\n     * @param CustomerSetupFactory $customerSetupFactory\n     * @param ModuleDataSetupInterface $moduleDataSetup\n     */\n    public function __construct(\n        CustomerSetupFactory $customerSetupFactory,\n        ModuleDataSetupInterface $moduleDataSetup\n    ) {\n        $this->customerSetupFactory = $customerSetupFactory;\n        $this->moduleDataSetup = $moduleDataSetup;\n    }\n    /**\n     * {@inheritdoc}\n     * @SuppressWarnings(PHPMD.ExcessiveMethodLength)\n     */\n    public function apply()\n    {\n        /** @var CustomerSetup $customerSetup */\n        $customerSetup = $this->customerSetupFactory->create(['setup' => $this->moduleDataSetup]);\n        ...\n        $customerSetup->installEntities();\n        $customerSetup->installCustomerForms();\n        $disableAGCAttribute = $customerSetup->getEavConfig()->getAttribute('customer', 'disable_auto_group_change');\n        ...\n        $migrationSetup = $this->moduleDataSetup->createMigrationSetup();\n        $migrationSetup->appendClassAliasReplace(\n            'customer_eav_attribute',\n            'data_model',\n            Migration::ENTITY_TYPE_MODEL,\n            Migration::FIELD_CONTENT_TYPE_PLAIN,\n            ['attribute_id']\n        );\n        $migrationSetup->doUpdateClassAliases();\n    }\n    ...\n}\n")),(0,r.mdx)("h2",{id:"module-version"},"Module version"),(0,r.mdx)("p",null,"Use the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/ModuleContextInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"ModuleContextInterface"))," to get the current module version and execute logic based on the version."),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," User module's UpgradeData.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace Magento\\User\\Setup;\n\nuse Magento\\Framework\\Encryption\\Encryptor;\nuse Magento\\Framework\\Setup\\ModuleContextInterface;\nuse Magento\\Framework\\Setup\\ModuleDataSetupInterface;\nuse Magento\\Framework\\Setup\\UpgradeDataInterface;\n\nclass UpgradeData implements UpgradeDataInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function upgrade(ModuleDataSetupInterface $setup, ModuleContextInterface $context)\n    {\n        $setup->startSetup();\n        if (version_compare($context->getVersion(), '2.0.1', '<')) {\n            $this->upgradeHash($setup);\n        }\n        $setup->endSetup();\n    }\n\n    ...\n\n}\n")),(0,r.mdx)("h2",{id:"uninstall-event"},"Uninstall event"),(0,r.mdx)("p",null,"The application executes the uninstall event class when your module is uninstalled using the following command:"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:uninstall --remove-data <module_name>\n")),(0,r.mdx)("p",null,"In this phase, your module should remove all traces of its existence in the database by dropping tables, deleting data, or restoring data."),(0,r.mdx)("table",null,(0,r.mdx)("thead",{parentName:"table"},(0,r.mdx)("tr",{parentName:"thead"},(0,r.mdx)("th",{parentName:"tr",align:null}),(0,r.mdx)("th",{parentName:"tr",align:null}))),(0,r.mdx)("tbody",{parentName:"table"},(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Class name")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"Uninstall"))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Interface")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("a",{parentName:"td",href:"https://github.com/magento/magento2/blob/2.4/lib/internal/Magento/Framework/Setup/UninstallInterface.php"},(0,r.mdx)("inlineCode",{parentName:"a"},"UninstallInterface")))),(0,r.mdx)("tr",{parentName:"tbody"},(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("strong",{parentName:"td"},"Method")),(0,r.mdx)("td",{parentName:"tr",align:null},(0,r.mdx)("inlineCode",{parentName:"td"},"uninstall()"))))),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Example:")," Uninstall.php"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<?php\n/**\n * Copyright &copy; Magento, Inc. All rights reserved.\n * See COPYING.txt for license details.\n */\n\nnamespace VendorName\\ModuleName\\Setup;\n\nuse Magento\\Framework\\Setup\\UninstallInterface;\n\nclass Uninstall implements UninstallInterface\n{\n    /**\n     * @inheritdoc\n     */\n    public function uninstall(SchemaSetupInterface $setup, ModuleContextInterface $context)\n    {\n        //Uninstall logic\n    }\n}\n")),(0,r.mdx)("h3",{id:"disabled-modules"},"Disabled modules"),(0,r.mdx)("p",null,"A disabled module can still execute its uninstall event.\nHowever, module-specific configurations such as its dependency injection and event/observer configurations will not be available and will cause problems."),(0,r.mdx)("p",null,"Avoid this situation by not including dependencies in your uninstall event class"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Related Topics:")),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("a",{parentName:"li",href:"../versioning/index.md"},"Versioning policy"))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-prepare-extension-lifecycle-md-7ada282521f895001ab4.js.map