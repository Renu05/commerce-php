"use strict";(self.webpackChunkcommerce_php=self.webpackChunkcommerce_php||[]).push([[33],{83116:function(e,n,r){r.r(n),r.d(n,{_frontmatter:function(){return i},default:function(){return u}});var s=r(87462),t=r(63366),a=(r(15007),r(64983)),o=r(91515),p=["components"],i={},d={_frontmatter:i},c=o.Z;function u(e){var n=e.components,r=(0,t.Z)(e,p);return(0,a.mdx)(c,(0,s.Z)({},d,r,{components:n,mdxType:"MDXLayout"}),(0,a.mdx)("h1",{id:"requests-for-specific-stores"},"Requests for specific stores"),(0,a.mdx)("p",null,"The ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento_AmqpStore")," module provides the ability for message queues to process asynchronous requests for specific stores."),(0,a.mdx)("h2",{id:"processing-messages"},"Processing messages"),(0,a.mdx)("p",null,"Adobe Commerce and Magento Open Source process each message that is sent to the Message Queue Framework, adding information about the current store. The following plugin implements this behavior:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-php"},"app/code/Magento/AmqpStore/Plugin/Framework/Amqp/Bulk/Exchange.php\n")),(0,a.mdx)("p",null,"The plugin executes before the ",(0,a.mdx)("inlineCode",{parentName:"p"},"enqueue")," method in ",(0,a.mdx)("inlineCode",{parentName:"p"},"Magento\\Framework\\Amqp\\Bulk\\Exchange"),"."),(0,a.mdx)("p",null,"By default, each AMQP message contains a list of properties. One of these properties is ",(0,a.mdx)("inlineCode",{parentName:"p"},"application_headers"),", and these headers are used for transfer the current ",(0,a.mdx)("inlineCode",{parentName:"p"},"store_id")," into the RabbitMQ queue."),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-php"},"public function beforeEnqueue(SubjectExchange $subject, $topic, array $envelopes)\n{\n    try {\n        $storeId = $this->storeManager->getStore()->getId();\n    } catch (NoSuchEntityException $e) {\n        $errorMessage = sprintf(\n            \"Can't get current storeId and inject to amqp message. Error %s.\",\n            $e->getMessage()\n        );\n        $this->logger->error($errorMessage);\n        throw new \\LogicException($errorMessage);\n    }\n    $updatedEnvelopes = [];\n    foreach ($envelopes as $envelope) {\n        $properties = $envelope->getProperties();\n        if (!isset($properties)) {\n            $properties = [];\n        }\n        if (isset($properties['application_headers'])) {\n            $headers = $properties['application_headers'];\n            if ($headers instanceof AMQPTable) {\n                try {\n                    $headers->set('store_id', $storeId);\n                } catch (AMQPInvalidArgumentException $ea) {\n                    $errorMessage = sprintf(\"Can't set storeId to amqp message. Error %s.\", $ea->getMessage());\n                    $this->logger->error($errorMessage);\n                    throw new AMQPInvalidArgumentException($errorMessage);\n                }\n                $properties['application_headers'] = $headers;\n            }\n        } else {\n            $properties['application_headers'] = new AMQPTable(['store_id' => $storeId]);\n        }\n        $updatedEnvelopes[] = $this->envelopeFactory->create(\n            [\n                'body' => $envelope->getBody(),\n                'properties' => $properties\n            ]\n        );\n    }\n    if (!empty($updatedEnvelopes)) {\n        $envelopes = $updatedEnvelopes;\n    }\n    return [$topic, $envelopes];\n}\n")),(0,a.mdx)("p",null,"In this example, you can see that the plugin checks ",(0,a.mdx)("inlineCode",{parentName:"p"},"application_headers")," and adds the ",(0,a.mdx)("inlineCode",{parentName:"p"},"store_id")," parameter. If the headers do not exist, then plugin creates them. As a result, each RabbitMQ message receives information about the store that is affected by an asynchronous request."),(0,a.mdx)("h2",{id:"processing-by-consumer"},"Processing by consumer"),(0,a.mdx)("p",null,(0,a.mdx)("a",{parentName:"p",href:"https://devdocs.magento.com/guides/v2.4/config-guide/cli/config-cli-subcommands-queue.html"},"Consumers")," pick up messages from the RabbitMQ queue and process them."),(0,a.mdx)("p",null,"On a step when a consumer reads a message, the extension executes an around plugin, as shown here:"),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-php"},"Magento\\AmqpStore\\Plugin\\AsynchronousOperations\\MassConsumerEnvelopeCallback::aroundExecute(SubjectMassConsumerEnvelopeCallback $subject, callable $proceed, EnvelopeInterface $message)\n")),(0,a.mdx)("pre",null,(0,a.mdx)("code",{parentName:"pre",className:"language-php"},"public function aroundExecute(SubjectMassConsumerEnvelopeCallback $subject, callable $proceed, EnvelopeInterface $message)\n    {\n        $amqpProperties = $message->getProperties();\n        if (isset($amqpProperties['application_headers'])) {\n            $headers = $amqpProperties['application_headers'];\n            if ($headers instanceof AMQPTable) {\n                $headers = $headers->getNativeData();\n            }\n            if (isset($headers['store_id'])) {\n                $storeId = $headers['store_id'];\n                try {\n                    $currentStoreId = $this->storeManager->getStore()->getId();\n                } catch (NoSuchEntityException $e) {\n                    $this->logger->error(\n                        sprintf(\n                            \"Can't set currentStoreId during processing queue. Message rejected. Error %s.\",\n                            $e->getMessage()\n                        )\n                    );\n                    $subject->getQueue()->reject($message, false, $e->getMessage());\n                    return;\n                }\n                if (isset($storeId) && $storeId !== $currentStoreId) {\n                    $this->storeManager->setCurrentStore($storeId);\n                }\n            }\n        }\n        $proceed($message);\n        if (isset($storeId, $currentStoreId) && $storeId !== $currentStoreId) {\n            $this->storeManager->setCurrentStore($currentStoreId);//restore original store value\n        }\n    }\n")),(0,a.mdx)("p",null,"The plugin checks the message headers and sets the current store value in ",(0,a.mdx)("inlineCode",{parentName:"p"},"storeManager")," to the received ",(0,a.mdx)("inlineCode",{parentName:"p"},"store_id")," value."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-development-components-message-queues-stores-md-c578a1e5e4afe4a7956b.js.map