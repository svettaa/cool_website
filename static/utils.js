function showErrorBlock(block, message) {
    block.html('<div class="alert alert-danger" role="alert">' + message + '</div>');
}

function createIconsTd(id, iconClassNames) {
    const td = $('<td></td>');

    const div = $('<div></div>');
    td.append(div);
    div.addClass('d-flex');
    div.addClass('justify-content-between');

    for (var i = 0; i < iconClassNames.length; i++) {
        div.append(createIcon(id, iconClassNames[i]));
    }
    return td;
}

function createIcon(id, className) {
    const span = $('<span></span>');
    span.addClass('table-icon');
    span.addClass(className);
    span.attr('value', id);
    return span;
}

function createTd(text) {
    const td = $('<td></td>');
    td.html(text);
    return td;
}

function createHeaderTable(headers) {
    return createHeaderTableParamIconWidth('100px', headers)
}

function createHeaderTableParamIconWidth(iconWidth, headers) {
    const table = $('<table></table>');
    table.addClass('table');
    table.addClass('table-bordered');
    table.addClass('table-responsive-lg');

    const thead = $('<thead></thead>');
    const tbody = $('<tbody></tbody>');
    table.append(thead);
    table.append(tbody);

    const tr = $('<tr></tr>');
    thead.append(tr);

    tr.append(createIconTh(iconWidth));
    for (var i = 0; i < headers.length; i++) {
        tr.append(createTh(headers[i]));
    }

    return table;
}

function createIconTh(iconWidth) {
    const th = $('<th></th>');
    th.css('width', iconWidth);
    th.attr('scope', 'col');
    return th;
}

function createTh(text) {
    const th = $('<th></th>');
    th.attr('scope', 'col');
    th.html(text);
    return th;
}