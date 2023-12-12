"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[96599],{79091:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return l},default:function(){return d}});var n=a(87462),i=a(45987),r=(a(35776),a(3905)),s=a(91515);const o=["components"],l={},p={_frontmatter:l},m=s.Z;function d(e){let{components:t}=e,a=(0,i.Z)(e,o);return(0,r.mdx)(m,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.mdx)("h1",{id:"cross-site-scripting-xss"},"Cross-site scripting (XSS)"),(0,r.mdx)("p",null,(0,r.mdx)("a",{parentName:"p",href:"https://owasp.org/www-community/attacks/xss/"},"Cross-site scripting"),", or XSS, is a security vulnerability that can be found in web applications. This vulnerability allows attackers to inject malicious code/styles into a web page viewed by users. Extension developers should be aware of these vulnerabilities to avoid introducing them in their code."),(0,r.mdx)("p",null,"There are three main types of XSS vulnerabilities:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Persisted XSS")," - In this type of vulnerability, the source of unvalidated data comes from the database or Backend permanent store."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"Reflected (non-persistent) XSS")," - This type of vulnerability occurs when data provided by a web client is used immediately by server-side scripts to parse and display a page to a user without properly sanitizing the request."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("strong",{parentName:"li"},"DOM XSS")," - For this vulnerability, the malicious data does not touch the web server. Rather, it is being reflected by the JavaScript code, fully on the client side.")),(0,r.mdx)("h2",{id:"preventing-xss"},"Preventing XSS"),(0,r.mdx)("p",null,"XSS vulnerabilities can be prevented by validating and sanitizing user input as well as sanitizing dynamic values when rendering the view (HTML, mobile)."),(0,r.mdx)("h3",{id:"input-processing"},"Input Processing"),(0,r.mdx)("p",null,"Any request data can be manipulated by attackers and can contain malicious values such as:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},'form fields filled with control characters ("',"<",'", ">" etc)'),(0,r.mdx)("li",{parentName:"ul"},"headers contain false IDs"),(0,r.mdx)("li",{parentName:"ul"},"URIs contain fake parts/query parameters"),(0,r.mdx)("li",{parentName:"ul"},"tampered cookies")),(0,r.mdx)("p",null,"To combat this, developers must validate any value coming in from requests."),(0,r.mdx)("p",null,"It is better to validate/sanitize values as close as possible to the view context because only then you can be sure of the restrictions you have to impose on dynamic values and you are not risking security requirements for business requirements."),(0,r.mdx)("p",null,"There is no reason, from a business standpoint, to disallow ",(0,r.mdx)("inlineCode",{parentName:"p"},"<")," ",(0,r.mdx)("inlineCode",{parentName:"p"},">"),' symbols in your users\' "About me" section. By escaping control symbols when rendering HTML, allowing these characters would not be problematic. "About me" data may be delivered via RESTful API, where ',(0,r.mdx)("inlineCode",{parentName:"p"},"{}")," could cause issues. If sanitized earlier, the user data would be damaged and contain HTML control symbols (",(0,r.mdx)("inlineCode",{parentName:"p"},"< >"),")."),(0,r.mdx)("h3",{id:"output-processing"},"Output Processing"),(0,r.mdx)("p",null,"Output processing involves sanitizing strings that may have come from external data sources before using it to render views. It is the main method of protecting your extension from XSS attacks."),(0,r.mdx)("p",null,"The general rule is: Do not trust dynamic values."),(0,r.mdx)("h4",{id:"phtml-templates"},"PHTML templates"),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Escaper")," class is provided for ",(0,r.mdx)("inlineCode",{parentName:"p"},".phtml")," templates and PHP classes responsible for generating HTML. It contains HTML sanitization methods for a variety of contexts."),(0,r.mdx)("p",null,"The ",(0,r.mdx)("inlineCode",{parentName:"p"},"$escaper")," local variable is available inside the .phtml templates. See the ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento2/blob/78bb169ff9721c8d05c35b4c29a4464fd45bccbe/app/code/Magento/Catalog/view/frontend/templates/product/list.phtml#L16"},"product listing template")," as example of ",(0,r.mdx)("inlineCode",{parentName:"p"},"$escaper")," usage in .phtml templates."),(0,r.mdx)("p",null,"See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/guide/templates/"},"Template guide")," to read more about templates in Magento."),(0,r.mdx)("p",null,"When using the ",(0,r.mdx)("inlineCode",{parentName:"p"},"\\Magento\\Framework\\Escaper")," or ",(0,r.mdx)("inlineCode",{parentName:"p"},"$escaper"),":"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},"If a method indicates that the content is escaped, do not escape: getTitleHtml(), getHtmlTitle() (the title is ready for HTML output)"),(0,r.mdx)("li",{parentName:"ul"},"Type casting and the php function ",(0,r.mdx)("inlineCode",{parentName:"li"},"count()")," do not need escaping (for example ",(0,r.mdx)("inlineCode",{parentName:"li"},"echo (int)$var"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"echo (bool)$var"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"echo count($var)"),")"),(0,r.mdx)("li",{parentName:"ul"},"Output in single quotes does not need escaping (for example echo 'some text')"),(0,r.mdx)("li",{parentName:"ul"},'Output in double quotes without variables does not need escaping (for example echo "some text")'),(0,r.mdx)("li",{parentName:"ul"},"For all other cases, escape the data using context-specific escape functions.")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"The following code sample illustrates XSS-safe output in templates:")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},'<?= $block->getTitleHtml() ?>\n<?= $block->getHtmlTitle() ?>\n<?= $escaper->escapeHtml($block->getTitle()) ?>\n<?= (int)$block->getId() ?>\n<?= count($var); ?>\n<?= \'some text\' ?>\n<?= "some text" ?>\n<a href="<?= $escaper->escapeUrl($block->getUrl()) ?>"><?= $block->getAnchorTextHtml() ?></a>\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"When to use Escaper methods:")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": JSON inside an HTML attribute"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeHtmlAttr"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<div data-bind='settings: <?= $escaper->escapeHtmlAttr($myJson) ?>'></div>\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": JSON inside script tag"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": ",(0,r.mdx)("em",{parentName:"p"},"no sanitization needed")),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<script>\nlet settings = <?= $myJson ?>\n<\/script>\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": HTML tag content that should not contain HTML"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeHtml"),(0,r.mdx)("p",null,"Pass in an optional array of allowed tags that will not be escaped."),(0,r.mdx)("p",null,"If a tag is allowed, the following attributes will not be escaped: ",(0,r.mdx)("inlineCode",{parentName:"p"},"id"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"class"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"href"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"style")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"title"),". Any other attribute for that allowed tag will be escaped."),(0,r.mdx)("p",null,(0,r.mdx)("inlineCode",{parentName:"p"},"embed"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"iframe"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"video"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"source"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"object"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"audio"),", ",(0,r.mdx)("inlineCode",{parentName:"p"},"script")," and ",(0,r.mdx)("inlineCode",{parentName:"p"},"img")," tags are not allowed, regardless of the content of this array."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"}," <span class=\"label\"><?= $escaper->escapeHtml($block->getLabel()) ?></span>\n  // Escaping translation\n  <div id='my-element'>\n      <?= $escaper->escapeHtml(__('Only registered users can write reviews. Please <a href=\"%1\">Sign in</a> or <a href=\"%2\">create an account</a>', $block->getLoginUrl(), $block->getCreateAccountUrl()), ['a']) ?>\n  </div>\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": URL inside certain HTML attributes"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeUrl"),(0,r.mdx)("p",null,"Certain attributes like ",(0,r.mdx)("inlineCode",{parentName:"p"},"a.href")," accept URIs of various types and must be sanitized."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},'<a href="<?= $escaper->escapeUrl($myUrl) ?>">Click me</a>\n<div attr-js-extracts="<?= $escaper->escapeHtmlAttr($myOtherUrl) ?>"></div>\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": All JavaScript inside attributes must be escaped by escapeJs before escapeHtmlAttr:"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeJS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<div\n    onclick=\"<?= $escaper->escapeHtmlAttr('handler(\"' . $escaper->escapeJs($aString) . '\", ' . $escaper->escapeJs($aVar) .')') ?>\">\n    My DIV\n</div>\n")),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": JavaScript string that must not contain JS/HTML"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeJS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},'<script>\nlet phrase = "Hi, my name is <?= $escaper->escapeJs($myName) ?>";\n//Do not use HTMl context methods like escapeUrl\nlet redirectUrl = "<?= $escaper->escapeJs($myUrl) ?>";\nlocation.href = redirectUrl;\n<\/script>\n')),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Case"),": JavaScript variable that must not contain JS/HTML"),(0,r.mdx)("p",null,(0,r.mdx)("strong",{parentName:"p"},"Escaper method"),": escapeJS"),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"<script>\nlet <?= $escaper->escapeJs($dynamicVariable) ?> = <?= $myJson ?>;\nsettings.<?= $escaper->escapeJs($myProperty) ?> = true;\n<\/script>\n")),(0,r.mdx)("h4",{id:"knockout-templates"},"Knockout templates"),(0,r.mdx)("p",null,"In knockout templates, you can bind a UI component's property/function as the 'inner HTML' of an element. Such properties may contain dynamic data and must be sanitized within componenets. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/concepts/binding-syntax/"},"binding syntax")," to learn more about UI component templates."),(0,r.mdx)("p",null,'In order to notify developers that these properties/function results may contain HTML, the application requires (with the help of a static test) that you name such properties/functions using "UnsanitizedHtml" suffix.'),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-html"},'<div data-bind="html: propUnsanitizedHtml"></div>\n<p html="returnUnsanitizedHtml()"></p>\n')),(0,r.mdx)("h4",{id:"dynamically-created-dom-elements"},"Dynamically created DOM elements"),(0,r.mdx)("p",null,"When using variables that are not supposed to contain HTML, the safest way to generate DOM elements is to create them programatically using the appropriate API, instead of using the ",(0,r.mdx)("em",{parentName:"p"},"innerHtml")," property or jQuery's ",(0,r.mdx)("em",{parentName:"p"},".html()")," function."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-javascript"},'let newDiv = document.createElement("div");\nnewDiv.innerText = userName;\nnewDiv.setAttribute("custom-attribute", myAttribute);\nparentElement.appendChild(newDiv);\n')),(0,r.mdx)("h4",{id:"ui-component-data-providers"},"UI component data providers"),(0,r.mdx)("p",null,"UI component data providers pass dynamic (user generated) data to UI components. The data they return is rendered in order to support component dynamic linking. Since user data is supposed to be treated as a literal value which is not refering to any other component, rendering of these properties must be disabled. See ",(0,r.mdx)("a",{parentName:"p",href:"https://developer.adobe.com/commerce/frontend-core/ui-components/concepts/data-source/"},"UI component data providers")," to read more about data providers and component linking."),(0,r.mdx)("pre",null,(0,r.mdx)("code",{parentName:"pre",className:"language-php"},"$uiData = ['linkProperty' => '${ $.otherComponent.value }'];\n$uiData['customer'] = $customer->getData();\n//Customer data will be taken as is, linkProperty will be retrieved from otherComponent and taken as is\n$uiData['__disableTmpl'] = ['customer' => true, 'linkProperty' => 1];\n\nreturn $uiData;\n")),(0,r.mdx)("h3",{id:"static-test"},"Static Test"),(0,r.mdx)("p",null,"To check your .phtml template for XSS vulnerabilities, use the ",(0,r.mdx)("em",{parentName:"p"},"Magento2.Security.XssTemplate")," sniff from ",(0,r.mdx)("a",{parentName:"p",href:"https://github.com/magento/magento-coding-standard"},"Coding Standard"),".\nThis sniff finds all ",(0,r.mdx)("em",{parentName:"p"},"echo")," calls in PHTML-templates and determines if the output is properly escaped.\nIt covers the following cases:"),(0,r.mdx)("ul",null,(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/* @noEscape */")," before output. Output does not require escaping. Test is green."),(0,r.mdx)("li",{parentName:"ul"},(0,r.mdx)("inlineCode",{parentName:"li"},"/* @escapeNotVerified */")," before output. Output escaping is not checked and should be verified. Test is green."),(0,r.mdx)("li",{parentName:"ul"},'Methods which contain "html" in their names (for example echo $object->{suffix}Html{postfix}()). Data is ready for the HTML output. Test is green.'),(0,r.mdx)("li",{parentName:"ul"},"AbstractBlock methods ",(0,r.mdx)("inlineCode",{parentName:"li"},"escapeHtml"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"escapeHtmlAttr"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"escapeUrl"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"escapeJs")," are allowed. Test is green."),(0,r.mdx)("li",{parentName:"ul"},"Type casting and php function ",(0,r.mdx)("inlineCode",{parentName:"li"},"count()")," are allowed (for example ",(0,r.mdx)("inlineCode",{parentName:"li"},"echo (int)$var"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"(bool)$var"),", ",(0,r.mdx)("inlineCode",{parentName:"li"},"count($var)"),"). Test is green."),(0,r.mdx)("li",{parentName:"ul"},"Output in single quotes (for example echo 'some text'). Test is green."),(0,r.mdx)("li",{parentName:"ul"},'Output in double quotes without variables (for example echo "some text"). Test is green.'),(0,r.mdx)("li",{parentName:"ul"},"Other of previously mentioned. Output is not escaped. Test is red.")))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-security-cross-site-scripting-md-46f3827cbb6d18a352a0.js.map