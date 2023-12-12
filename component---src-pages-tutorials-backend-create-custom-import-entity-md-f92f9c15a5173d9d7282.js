"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[6764],{7368:function(e,n,t){t.r(n),t.d(n,{_frontmatter:function(){return p},default:function(){return u}});var a=t(87462),r=t(45987),o=(t(35776),t(3905)),i=t(91515);const m=["components"],p={},s=(l="InlineAlert",function(e){return console.warn("Component "+l+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.mdx)("div",e)});var l;const d={_frontmatter:p},c=i.Z;function u(e){let{components:n}=e,t=(0,r.Z)(e,m);return(0,o.mdx)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("h1",{id:"create-a-custom-import-entity"},"Create a custom import entity"),(0,o.mdx)("p",null,"This tutorial shows you how to extend the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/ImportExport/Model/Import/Entity/AbstractEntity.php"},"Magento/ImportExport/Model/Import/Entity/AbstractEntity")," class to import data into your custom module's table.\nThe current import entities can be found in ",(0,o.mdx)("strong",{parentName:"p"},"System")," > ",(0,o.mdx)("strong",{parentName:"p"},"Import"),":"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},"Advanced Pricing"),(0,o.mdx)("li",{parentName:"ul"},"Products"),(0,o.mdx)("li",{parentName:"ul"},"Customers and Addresses (single file)"),(0,o.mdx)("li",{parentName:"ul"},"Customers Main File"),(0,o.mdx)("li",{parentName:"ul"},"Customer Addresses")),(0,o.mdx)("p",null,"To begin, suppose we have a custom table with the following structure:"),(0,o.mdx)("table",null,(0,o.mdx)("thead",{parentName:"table"},(0,o.mdx)("tr",{parentName:"thead"},(0,o.mdx)("th",{parentName:"tr",align:null},"entity_id"),(0,o.mdx)("th",{parentName:"tr",align:null},"name"),(0,o.mdx)("th",{parentName:"tr",align:null},"duration"))),(0,o.mdx)("tbody",{parentName:"table"},(0,o.mdx)("tr",{parentName:"tbody"},(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null}),(0,o.mdx)("td",{parentName:"tr",align:null})))),(0,o.mdx)("h2",{id:"step-1-adding-a-new-entity-type"},"Step 1: Adding a new entity type"),(0,o.mdx)("p",null,"Declare the new import entity:"),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("inlineCode",{parentName:"p"},"etc/import.xml"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:module:Magento_ImportExport:etc/import.xsd">\n    <entity name="learning" label="Learning Courses Import" model="ExampleCorp\\Learning\\Model\\Import\\Courses"\n            behaviorModel="Magento\\ImportExport\\Model\\Source\\Import\\Behavior\\Basic" />\n</config>\n')),(0,o.mdx)("p",null,"Extending the ",(0,o.mdx)("strong",{parentName:"p"},"Magento_ImportExport")," module, we create a dependency to it in the ",(0,o.mdx)("inlineCode",{parentName:"p"},"module.xml")," file."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("inlineCode",{parentName:"p"},"etc/module.xml"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'...\n<sequence>\n    <module name="Magento_ImportExport" />\n</sequence>\n...\n')),(0,o.mdx)("h2",{id:"step-2-defining-the-import-model"},"Step 2: Defining the import model"),(0,o.mdx)("p",null,"As we extend the ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/2.4/app/code/Magento/ImportExport/Model/Import/Entity/AbstractEntity.php"},"Magento/ImportExport/Model/Import/Entity/AbstractEntity"),", we implement the following abstract methods:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"_importData")," - Import data rows"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"getEntityTypeCode")," - EAV entity type code getter"),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"validateRow")," - Validating the row")),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp/Learning/Model/Import/Courses.php"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"namespace ExampleCorp\\Learning\\Model\\Import;\n\nuse Exception;\nuse Magento\\Framework\\App\\ResourceConnection;\nuse Magento\\Framework\\DB\\Adapter\\AdapterInterface;\nuse Magento\\Framework\\Json\\Helper\\Data as JsonHelper;\nuse Magento\\ImportExport\\Helper\\Data as ImportHelper;\nuse Magento\\ImportExport\\Model\\Import;\nuse Magento\\ImportExport\\Model\\Import\\Entity\\AbstractEntity;\nuse Magento\\ImportExport\\Model\\Import\\ErrorProcessing\\ProcessingErrorAggregatorInterface;\nuse Magento\\ImportExport\\Model\\ResourceModel\\Helper;\nuse Magento\\ImportExport\\Model\\ResourceModel\\Import\\Data;\n\n/**\n * Class Courses\n */\nclass Courses extends AbstractEntity\n{\n    const ENTITY_CODE = 'learning';\n    const TABLE = 'learning_courses';\n    const ENTITY_ID_COLUMN = 'entity_id';\n\n    /**\n     * If we should check column names\n     */\n    protected $needColumnCheck = true;\n\n    /**\n     * Need to log in import history\n     */\n    protected $logInHistory = true;\n\n    /**\n     * Permanent entity columns.\n     */\n    protected $_permanentAttributes = [\n        'entity_id'\n    ];\n\n    /**\n     * Valid column names\n     */\n    protected $validColumnNames = [\n        'entity_id',\n        'name',\n        'duration'\n    ];\n\n    /**\n     * @var AdapterInterface\n     */\n    protected $connection;\n\n    /**\n     * @var ResourceConnection\n     */\n    private $resource;\n\n    /**\n     * Courses constructor.\n     *\n     * @param JsonHelper $jsonHelper\n     * @param ImportHelper $importExportData\n     * @param Data $importData\n     * @param ResourceConnection $resource\n     * @param Helper $resourceHelper\n     * @param ProcessingErrorAggregatorInterface $errorAggregator\n     */\n    public function __construct(\n        JsonHelper $jsonHelper,\n        ImportHelper $importExportData,\n        Data $importData,\n        ResourceConnection $resource,\n        Helper $resourceHelper,\n        ProcessingErrorAggregatorInterface $errorAggregator\n    ) {\n        $this->jsonHelper = $jsonHelper;\n        $this->_importExportData = $importExportData;\n        $this->_resourceHelper = $resourceHelper;\n        $this->_dataSourceModel = $importData;\n        $this->resource = $resource;\n        $this->connection = $resource->getConnection(ResourceConnection::DEFAULT_CONNECTION);\n        $this->errorAggregator = $errorAggregator;\n    }\n\n    /**\n     * Entity type code getter.\n     *\n     * @return string\n     */\n    public function getEntityTypeCode()\n    {\n        return static::ENTITY_CODE;\n    }\n\n    /**\n     * Get available columns\n     *\n     * @return array\n     */\n    public function getValidColumnNames(): array\n    {\n        return $this->validColumnNames;\n    }\n\n    /**\n     * Row validation\n     *\n     * @param array $rowData\n     * @param int $rowNum\n     *\n     * @return bool\n     */\n    public function validateRow(array $rowData, $rowNum): bool\n    {\n        if (isset($this->_validatedRows[$rowNum])) {\n            return !$this->getErrorAggregator()->isRowInvalid($rowNum);\n        }\n\n        $this->_validatedRows[$rowNum] = true;\n\n        return !$this->getErrorAggregator()->isRowInvalid($rowNum);\n    }\n\n    /**\n     * Import data\n     *\n     * @return bool\n     *\n     * @throws Exception\n     */\n    protected function _importData(): bool\n    {\n        switch ($this->getBehavior()) {\n            case Import::BEHAVIOR_DELETE:\n                $this->deleteEntity();\n                break;\n            case Import::BEHAVIOR_REPLACE:\n                $this->saveAndReplaceEntity();\n                break;\n            case Import::BEHAVIOR_APPEND:\n                $this->saveAndReplaceEntity();\n                break;\n        }\n\n        return true;\n    }\n\n    /**\n     * Delete entities\n     *\n     * @return bool\n     */\n    private function deleteEntity(): bool\n    {\n        $rows = [];\n        while ($bunch = $this->_dataSourceModel->getNextBunch()) {\n            foreach ($bunch as $rowNum => $rowData) {\n                $this->validateRow($rowData, $rowNum);\n\n                if (!$this->getErrorAggregator()->isRowInvalid($rowNum)) {\n                    $rowId = $rowData[static::ENTITY_ID_COLUMN];\n                    $rows[] = $rowId;\n                }\n\n                if ($this->getErrorAggregator()->hasToBeTerminated()) {\n                    $this->getErrorAggregator()->addRowToSkip($rowNum);\n                }\n            }\n        }\n\n        if ($rows) {\n            return $this->deleteEntityFinish(array_unique($rows));\n        }\n\n        return false;\n    }\n\n    /**\n     * Save and replace entities\n     *\n     * @return void\n     */\n    private function saveAndReplaceEntity()\n    {\n        $behavior = $this->getBehavior();\n        $rows = [];\n        while ($bunch = $this->_dataSourceModel->getNextBunch()) {\n            $entityList = [];\n\n            foreach ($bunch as $rowNum => $row) {\n                if (!$this->validateRow($row, $rowNum)) {\n                    continue;\n                }\n\n                if ($this->getErrorAggregator()->hasToBeTerminated()) {\n                    $this->getErrorAggregator()->addRowToSkip($rowNum);\n\n                    continue;\n                }\n\n                $rowId = $row[static::ENTITY_ID_COLUMN];\n                $rows[] = $rowId;\n                $columnValues = [];\n\n                foreach ($this->getAvailableColumns() as $columnKey) {\n                    $columnValues[$columnKey] = $row[$columnKey];\n                }\n\n                $entityList[$rowId][] = $columnValues;\n                $this->countItemsCreated += (int) !isset($row[static::ENTITY_ID_COLUMN]);\n                $this->countItemsUpdated += (int) isset($row[static::ENTITY_ID_COLUMN]);\n            }\n\n            if (Import::BEHAVIOR_REPLACE === $behavior) {\n                if ($rows && $this->deleteEntityFinish(array_unique($rows))) {\n                    $this->saveEntityFinish($entityList);\n                }\n            } elseif (Import::BEHAVIOR_APPEND === $behavior) {\n                $this->saveEntityFinish($entityList);\n            }\n        }\n    }\n\n    /**\n     * Save entities\n     *\n     * @param array $entityData\n     *\n     * @return bool\n     */\n    private function saveEntityFinish(array $entityData): bool\n    {\n        if ($entityData) {\n            $tableName = $this->connection->getTableName(static::TABLE);\n            $rows = [];\n\n            foreach ($entityData as $entityRows) {\n                foreach ($entityRows as $row) {\n                    $rows[] = $row;\n                }\n            }\n\n            if ($rows) {\n                $this->connection->insertOnDuplicate($tableName, $rows, $this->getAvailableColumns());\n\n                return true;\n            }\n\n            return false;\n        }\n    }\n\n    /**\n     * Delete entities\n     *\n     * @param array $entityIds\n     *\n     * @return bool\n     */\n    private function deleteEntityFinish(array $entityIds): bool\n    {\n        if ($entityIds) {\n            try {\n                $this->countItemsDeleted += $this->connection->delete(\n                    $this->connection->getTableName(static::TABLE),\n                    $this->connection->quoteInto(static::ENTITY_ID_COLUMN . ' IN (?)', $entityIds)\n                );\n\n                return true;\n            } catch (Exception $e) {\n                return false;\n            }\n        }\n\n        return false;\n    }\n\n    /**\n     * Get available columns\n     *\n     * @return array\n     */\n    private function getAvailableColumns(): array\n    {\n        return $this->validColumnNames;\n    }\n}\n")),(0,o.mdx)("h3",{id:"data-validation"},"Data validation"),(0,o.mdx)("p",null,"Sometimes, there is a need to validate data before inserting it into table. To do that, we have to add all our validation rules to ",(0,o.mdx)("inlineCode",{parentName:"p"},"validateRow")," method."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Row validation\n *\n * @param array $rowData\n * @param int $rowNum\n *\n * @return bool\n */\npublic function validateRow(array $rowData, $rowNum): bool\n{\n    $name = $rowData['name'] ?? '';\n    $duration = (int) $rowData['duration'] ?? 0;\n\n    if (!$name) {\n        $this->addRowError('NameIsRequired', $rowNum);\n    }\n\n    if (!$duration) {\n        $this->addRowError('DurationIsRequired', $rowNum);\n    }\n\n    if (isset($this->_validatedRows[$rowNum])) {\n        return !$this->getErrorAggregator()->isRowInvalid($rowNum);\n    }\n\n    $this->_validatedRows[$rowNum] = true;\n\n    return !$this->getErrorAggregator()->isRowInvalid($rowNum);\n}\n")),(0,o.mdx)("p",null,"We need to instantiate our new validation rules:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"/**\n * Init Error Messages\n */\nprivate function initMessageTemplates()\n{\n    $this->addMessageTemplate(\n        'NameIsRequired',\n        __('The name cannot be empty.')\n    );\n    $this->addMessageTemplate(\n        'DurationIsRequired',\n        __('Duration should be greater than 0.')\n    );\n}\n")),(0,o.mdx)("p",null,"And finally, call the ",(0,o.mdx)("inlineCode",{parentName:"p"},"initMessageTemplates")," method within ",(0,o.mdx)("inlineCode",{parentName:"p"},"__construct")," method:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-php"},"public function __construct(\n    ...\n) {\n    ...\n\n    $this->initMessageTemplates();\n}\n")),(0,o.mdx)("p",null,"The validation rules will be checking for a required ",(0,o.mdx)("strong",{parentName:"p"},"name")," and a greater than 0 ",(0,o.mdx)("strong",{parentName:"p"},"duration"),"."),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"522px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.1875%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/5a01caf6867e7a9f3bb487bd39a55e3c/5530d/import-validation.webp 320w","/commerce-php/static/5a01caf6867e7a9f3bb487bd39a55e3c/a540d/import-validation.webp 522w"],sizes:"(max-width: 522px) 100vw, 522px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/5a01caf6867e7a9f3bb487bd39a55e3c/dd4a7/import-validation.png 320w","/commerce-php/static/5a01caf6867e7a9f3bb487bd39a55e3c/d15a3/import-validation.png 522w"],sizes:"(max-width: 522px) 100vw, 522px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/5a01caf6867e7a9f3bb487bd39a55e3c/d15a3/import-validation.png",alt:"Validating Data",title:"Validating Data",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")),(0,o.mdx)("h2",{id:"step-3-providing-the-sample-file"},"Step 3. Providing the sample file"),(0,o.mdx)("p",null,"To add the ability to download a sample csv file for our new entity, create the following file:"),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"ExampleCorp/Learning/Files/Sample/learning.csv")),(0,o.mdx)("p",null,"With the following content:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-text"},'entity_id,name,duration\n,"First Course",90\n,"Second Course",120\n')),(0,o.mdx)(s,{variant:"info",slots:"text",mdxType:"InlineAlert"}),(0,o.mdx)("p",null,"When updating the table's data, you must provide the ",(0,o.mdx)("inlineCode",{parentName:"p"},"entity_id")," value for each row."),(0,o.mdx)("p",null,"Next, register the sample file for our entity."),(0,o.mdx)("blockquote",null,(0,o.mdx)("p",{parentName:"blockquote"},(0,o.mdx)("inlineCode",{parentName:"p"},"etc/di.xml"))),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-xml"},'<config xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"\n        xsi:noNamespaceSchemaLocation="urn:magento:framework:ObjectManager/etc/config.xsd">\n    <type name="Magento\\ImportExport\\Model\\Import\\SampleFileProvider">\n        <arguments>\n            <argument name="samples" xsi:type="array">\n                <item name="learning" xsi:type="string">ExampleCorp_Learning</item>\n            </argument>\n        </arguments>\n    </type>\n</config>\n')),(0,o.mdx)("h2",{id:"result"},"Result"),(0,o.mdx)("p",null,"As result, the new Entity Type and the sample CSV are available:"),(0,o.mdx)("p",null,(0,o.mdx)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"686px"}},"\n      ",(0,o.mdx)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"13.750000000000002%",position:"relative",bottom:"0",left:"0",display:"block",transition:"opacity 0.5s 0.5s",pointerEvents:"none"}}),"\n  ",(0,o.mdx)("picture",{parentName:"span"},"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/5530d/import-entity.webp 320w","/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/0c8fb/import-entity.webp 640w","/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/b315f/import-entity.webp 686w"],sizes:"(max-width: 686px) 100vw, 686px",type:"image/webp"}),"\n          ",(0,o.mdx)("source",{parentName:"picture",srcSet:["/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/dd4a7/import-entity.png 320w","/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/0f09e/import-entity.png 640w","/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/3a6ec/import-entity.png 686w"],sizes:"(max-width: 686px) 100vw, 686px",type:"image/png"}),"\n          ",(0,o.mdx)("img",{parentName:"picture",className:"gatsby-resp-image-image",src:"/commerce-php/static/7445fa6645ed04ae26bd2145514cad85/3a6ec/import-entity.png",alt:"Import Entity",title:"Import Entity",loading:"lazy",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",opacity:"0",transition:"opacity 0.5s",color:"inherit",boxShadow:"inset 0px 0px 0px 400px none",top:"0",left:"0"}}),"\n        "),"\n    ")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-tutorials-backend-create-custom-import-entity-md-f92f9c15a5173d9d7282.js.map