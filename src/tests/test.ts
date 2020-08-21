import { Selector } from 'testcafe';
import { assertBooleanEquals, assertTextEquals } from '../lib/assertions';

fixture `Warning examples`

test.page('../page1.html')('First example', async t => {
    const claimIndex        = 0;
    const jurisdictionIndex = 0;
    const value             = 'value';

    const selector = Selector('span')
        .withExactText(`Condition 1`)
        .parent()
        .sibling(1)
        .child(claimIndex)
        .child(1)
        .child(jurisdictionIndex)
        .child()
        .child()
        .child()
        .child()
        .child()
        .withAttribute('class', /singleValue/);

        await assertTextEquals(t, selector, value, 'It failed');
});

test.page('../page2.html')('Second example', async t => {
    const checkbox = Selector(`#test-checkbox`);
    await assertBooleanEquals(t, checkbox, false, 'It failed');
    await t.click(checkbox);
    await assertBooleanEquals(t, checkbox, true, 'It failed');
});