export const assertTextEquals = async (t: TestController, selector: Selector, textToEqual: string, failText: string) =>
    await t.expect(selector.textContent).eql(textToEqual, failText);
    
export const assertBooleanEquals = async (t: TestController, selector: Selector, state: boolean, failText: string) =>
	await t.expect(selector.checked).eql(state, failText);