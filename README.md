# stateful-logic-apps

The goal of these Logic Apps demos is to show how we could create workflows that need to persist state. I am exploring 2 ways of achieving it:
- Using Logic Apps that sleep while waiting for some event that will make it advance to another stage. This is implemented with *Webhooks* actions.
- Using pure stateless Logic Apps that persist state in an external persistent store.

Below you can find the steps to configure these demos in your own Azure environment.

## Steps to import the Stateful Logic Apps demos

