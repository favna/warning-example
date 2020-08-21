import { Selector } from 'testcafe';

fixture `Warning examples`;

test.page('./page-first.html')('First example', async t => {
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

    if (value) {
        await t.expect(selector.textContent).eql(value);
    } else {
        await t.expect(selector.exists).notOk();
    }
});

test.page('./page-second.html')('Second example', async t => {
    const checkbox = Selector(`#test-checkbox`);
    await t.expect(checkbox.checked).eql(false).click(checkbox).expect(checkbox.checked).eql(true);
});