"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[55088],{64755:function(e,n,a){a.r(n),a.d(n,{_frontmatter:function(){return i},default:function(){return c}});var m=a(87462),o=a(45987),t=(a(35776),a(3905)),d=a(91515);const r=["components"],i={},l=(s="InlineAlert",function(e){return console.warn("Component "+s+" was not imported, exported, or provided by MDXProvider as global scope"),(0,t.mdx)("div",e)});var s;const p={_frontmatter:i},u=d.Z;function c(e){let{components:n}=e,a=(0,o.Z)(e,r);return(0,t.mdx)(u,(0,m.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,t.mdx)("h1",{id:"command-naming-guidelines"},"Command naming guidelines"),(0,t.mdx)("p",null,"As an extension developer, you can now create and distribute your own commands for Adobe Commerce and Magento Open Source applications. But as for any implementation, it's also important to follow some general conventions to keep your commands consistent with commands from other developers. Being consistent in this way reduces the user's learning curve."),(0,t.mdx)("p",null,"This topic discusses our recommended naming conventions."),(0,t.mdx)("h2",{id:"name"},"Name"),(0,t.mdx)("p",null,"A command ",(0,t.mdx)("em",{parentName:"p"},"name")," is a part of the command, which defines behavior of the command on the very high level. In the command it goes right after the command's name.\nFor example, in ",(0,t.mdx)("inlineCode",{parentName:"p"},"bin/magento setup:upgrade"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"bin/magento")," is the command's name and ",(0,t.mdx)("inlineCode",{parentName:"p"},"setup:upgrade")," is the name of the command."),(0,t.mdx)("p",null,"If you have an application installation handy, enter the following to display the current list of commands:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento list\n")),(0,t.mdx)("h3",{id:"format"},"Format"),(0,t.mdx)("p",null,"The format for command names is ",(0,t.mdx)("inlineCode",{parentName:"p"},"group:[subject:]action"),"."),(0,t.mdx)("h4",{id:"group"},"group"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"group")," represents a group of related commands. Commands in a group display in a list, which in turn makes it easier for the user to find the desired command. To find a group name for a command, imagine an subject area where it can be used. The subject area can be any of the following:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("em",{parentName:"li"},"Domain")," area (for example, ",(0,t.mdx)("inlineCode",{parentName:"li"},"module")," for actions with modules, ",(0,t.mdx)("inlineCode",{parentName:"li"},"info")," for commands that provide some information)"),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("em",{parentName:"li"},"Workflow")," area (for example, ",(0,t.mdx)("inlineCode",{parentName:"li"},"admin")," for commands that can be used by an administrator, ",(0,t.mdx)("inlineCode",{parentName:"li"},"dev")," for a developer)")),(0,t.mdx)("h4",{id:"subject"},"subject"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"subject")," is a subject for the action. The subject is optional, but it can be useful for defining sets of commands that work with the same object. If a subject is represented by a compound word, use a dash or hyphen character to separate the words."),(0,t.mdx)("h4",{id:"action"},"action"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"action")," is an action the command does."),(0,t.mdx)("h4",{id:"examples"},"Examples"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"// general commands: just a group and an action\nbin/magento setup:install\nbin/magento module:status\n\n// set of commands with a subject\nbin/magento setup:config:set\nbin/magento setup:config:delete\nbin/magento setup:db-schema:upgrade\nbin/magento setup:db-data:upgrade\n")),(0,t.mdx)(l,{variant:"info",slots:"text",mdxType:"InlineAlert"}),"`db-schema` and `db-data` are examples of compound words.",(0,t.mdx)("h2",{id:"options-and-arguments"},"Options and arguments"),(0,t.mdx)("p",null,"Options and arguments follow the command name and modify the command's behavior."),(0,t.mdx)("p",null,"For example, in ",(0,t.mdx)("inlineCode",{parentName:"p"},"bin/magento module:disable --force Magento_Catalog"),", the ",(0,t.mdx)("inlineCode",{parentName:"p"},"--force")," ",(0,t.mdx)("em",{parentName:"p"},"option")," and the ",(0,t.mdx)("inlineCode",{parentName:"p"},"Magento_Catalog")," ",(0,t.mdx)("em",{parentName:"p"},"argument")," bypass the restrictions and specify a particular module to be disabled; in this case, regardless of dependencies on other modules."),(0,t.mdx)("p",null,"Options and arguments create different user experiences. As a developer, you can choose which type of input is better for your particular case."),(0,t.mdx)("h3",{id:"arguments"},"Arguments"),(0,t.mdx)("p",null,"Arguments are values passed by the user in a specified order. The argument name is not visible to the user."),(0,t.mdx)("h4",{id:"format-1"},"Format"),(0,t.mdx)("p",null,"The format for command arguments is a single word or a compound word separated with a dash or hyphen character."),(0,t.mdx)("h4",{id:"examples-1"},"Examples"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"}," bin/magento dev:theme:create frontend vendor themename\n")),(0,t.mdx)("p",null,"where:"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"frontend")," is a subject area argument"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"vendor")," is a vendor argument"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"themename")," is a theme name argument"),(0,t.mdx)("p",null,"Use arguments when you need required data from the user. We recommend as few arguments as possible (no more then three) so the user will not confuse their order."),(0,t.mdx)("p",null,"To make it simpler for the user, we recommend the following:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Run the CLI multiple times for providing multiple similar values instead of running it once with 20 values")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Use default values for required arguments where possible."),(0,t.mdx)("p",{parentName:"li"},"You can then use options instead of arguments to minimize the amount of required data the user must enter.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Replace arguments with options: options are named, so the user can provide them in any order. This requires additional data validation (by default, all options are optional)."))),(0,t.mdx)("h3",{id:"options"},"Options"),(0,t.mdx)("p",null,"Options are name-value pairs. The sequence of entered values doesn't matter."),(0,t.mdx)("p",null,"An option can have a value or no value. An option that does not require a value represents a flag (",(0,t.mdx)("inlineCode",{parentName:"p"},"yes")," or ",(0,t.mdx)("inlineCode",{parentName:"p"},"no"),")."),(0,t.mdx)("p",null,"An option can also have a one-letter shortcut as an alternative to its full name. Enable shortcuts for often-used options or if it's easy to determine what the shortcut means. Usually it makes sense to enable shortcuts for options similar to the ones used in widely-used commands (for example, ",(0,t.mdx)("inlineCode",{parentName:"p"},"-f")," for ",(0,t.mdx)("inlineCode",{parentName:"p"},"--force"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"-v")," for ",(0,t.mdx)("inlineCode",{parentName:"p"},"--verbose"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"-h")," for ",(0,t.mdx)("inlineCode",{parentName:"p"},"--help"),")."),(0,t.mdx)("h4",{id:"format-2"},"Format"),(0,t.mdx)("p",null,"The format for command options is a single word or a compound word separated with a dash or hyphen character."),(0,t.mdx)("h4",{id:"examples-2"},"Examples"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento dev:theme:create --parent=Magento/luma frontend arg1 arg2\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento dev:theme:create -p=Magento/luma frontend vendor themename\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento dev:theme:create --extend-from=Magento/luma frontend vendor themename\n")),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-bash"},"bin/magento module:disable -f Magento_Cms\n")),(0,t.mdx)("p",null,"Where:"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"--parent")," is an option that specifies a parent theme"),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"-p")," is a shortcut for ",(0,t.mdx)("inlineCode",{parentName:"p"},"--parent")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"-f")," is a shortcut for a non-value option ",(0,t.mdx)("inlineCode",{parentName:"p"},"--force")),(0,t.mdx)("p",null,(0,t.mdx)("inlineCode",{parentName:"p"},"arg1"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"arg2"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"frontend"),", ",(0,t.mdx)("inlineCode",{parentName:"p"},"vendor")," and ",(0,t.mdx)("inlineCode",{parentName:"p"},"themename")," are arguments (see ",(0,t.mdx)("a",{parentName:"p",href:"#options-and-arguments"},"Command options and arguments"),")."),(0,t.mdx)("p",null,"Use options for:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},"Optional data"),(0,t.mdx)("li",{parentName:"ul"},"Required data that has a default value")),(0,t.mdx)("p",null,"Example:"),(0,t.mdx)("pre",null,(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"// correct\nbin/magento dev:theme:create --extend-from=Magento/luma frontend Foo bar\nbin/magento module:disable --force Magento_Catalog\nbin/magento module:disable -f Magento_Catalog\n\n//incorrect\nbin/magento module:disable --force=1 Magento_Catalog\nbin/magento module:disable -f=yes Magento_Catalog\n")),(0,t.mdx)("h2",{id:"recommendations"},"Recommendations"),(0,t.mdx)("p",null,"To avoid naming your command the same as another command, we recommend:"),(0,t.mdx)("ul",null,(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Looking at other extensions in the Commerce Marketplace before you choose a name for your commands. By planning ahead, you can avoid naming collisions entirely.")),(0,t.mdx)("li",{parentName:"ul"},(0,t.mdx)("p",{parentName:"li"},"Restricting command names to start with a unique name, such as a vendor name. The usability of the command depends on what you choose for a vendor name."),(0,t.mdx)("p",{parentName:"li"},"For example, ",(0,t.mdx)("inlineCode",{parentName:"p"},"myname:dev:theme:create")," is not obvious and is hard to remember."),(0,t.mdx)("p",{parentName:"li"},"The vendor name doesn't have to start the command name; it could be in the middle. This way, related commands are grouped together."),(0,t.mdx)("p",{parentName:"li"},"Examples:"),(0,t.mdx)("pre",{parentName:"li"},(0,t.mdx)("code",{parentName:"pre",className:"language-terminal"},"dev:myname:theme:create\ndev:myname:theme:delete\n")))))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-cli-commands-naming-guidelines-md-cafa563f9caaf36b1c35.js.map