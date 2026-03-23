class HtmlIncluder {

    includeBySelector(selector, data) {
        selector.innerHTML = data;
    }

    includeFileQuerySelector(filepath, selector) {
        fetch(filepath)
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.querySelector(selector).innerHTML = data;
            });
    }

    includeFileByid(filepath, id) {
        fetch(filepath)
            .then(response => {
                return response.text()
            })
            .then(data => {
                document.getElementById(id).innerHTML = data;
            });
    }
}

const htmlIncluder = new HtmlIncluder();

htmlIncluder.includeFileQuerySelector('./header.html', 'header');
htmlIncluder.includeFileQuerySelector('./footer.html', 'footer');
