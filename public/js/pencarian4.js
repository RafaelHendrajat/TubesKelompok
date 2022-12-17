const inputContainer = document.querySelector('#input-container');
const dataContainer = document.querySelector('.data-container');
let currentBook = 4;
const paginationContainer = document.querySelector('.pagination');

const paginationContainertag = document.querySelector('#pagination-container');
const datawrappertag = document.querySelector('.data-wrapper');
paginationContainertag.classList.add("hidden")
datawrappertag.classList.add("hidden");

const inputText = document.querySelector('#input-text');

const btnCari = document.querySelector('#btn-cari');



btnCari.addEventListener("click", () => {
    if(inputText.value != ""){
        getCount(currentBook, inputText.value).then(res => {
            paginationContainertag.classList.remove("hidden")
            datawrappertag.classList.remove("hidden");
            let banyakPage = Math.ceil((res[0].jumlah) / 10);
            paginationContainer.replaceChildren();
            makePagination(banyakPage);
            const tombol = document.querySelectorAll('.page-link');
            const tombolWrap = document.querySelectorAll('.page-item');
            tombolWrap[0].classList.add('active');
            let before = 0;
            for (let i of tombol) {
                i.addEventListener('click', () => {
                    tombolWrap[before].classList.remove('active');
                    before = i.textContent - 1;
                    tombolWrap[i.textContent - 1].classList.add('active');

                    getData(currentBook, inputText.value, i.textContent - 1);
                });
            }
        });
        getData(currentBook, inputText.value, 0);
    }
});

function getCount(indexBook, keyword) {
    const obj = { book: indexBook, name: keyword };
    const init = {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    };

    const jumlah = fetch('/pencarian/book4/hitungJumlah', init).then(onSuccess);
    function onSuccess(response) {
        return response.json();
    }
    return jumlah;
}

function clearData() {
    inputText.value = "";
    paginationContainer.replaceChildren();
    dataContainer.replaceChildren();
}

function getData(indexBook, keyword, rowIdx) {
    const obj = { book: indexBook, name: keyword, start: rowIdx };
    const init = {
        method: 'post',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
    };

    fetch('/pencarian/book4/cariNama', init).then(onSuccess).then(showResult);
    function onSuccess(response) {
        return response.json();
    }

    function showResult(data) {
        showData(data);
    }

}

function showData(data) {
    dataContainer.replaceChildren();
    const container = document.createElement('div');
    container.classList.add('oneDataContainer');
    container.classList.add('white');
    const source = document.createElement('span');
    source.classList.add('source-container');
    source.textContent = "Source";
    const target = document.createElement('span');
    target.classList.add('target-container');
    target.textContent = "Target";
    const weight = document.createElement('span');
    weight.classList.add('weight-container');
    weight.textContent = "Weight";
    container.appendChild(source);
    container.appendChild(target);
    container.appendChild(weight);
    dataContainer.appendChild(container);
    for (let i of data) {
        const container = document.createElement('div');
        container.classList.add('oneDataContainer');
        container.classList.add('black');
        const source = document.createElement('span');
        source.classList.add('source-container');
        source.textContent = i.source;
        const target = document.createElement('span');
        target.classList.add('target-container');
        target.textContent = i.target;
        const weight = document.createElement('span');
        weight.classList.add('weight-container');
        weight.textContent = i.weight;
        container.appendChild(source);
        container.appendChild(target);
        container.appendChild(weight);
        dataContainer.appendChild(container);
    }
}

function makePagination(pages) {
    for (i = 0; i < pages; i++) {
        const li = document.createElement('li');
        li.classList.add("page-item");
        const btn = document.createElement('button');
        btn.classList.add('page-link');
        btn.classList.add(`${i + 1}`);
        btn.innerText = `${i + 1}`;
        li.appendChild(btn);
        const page = document.querySelector('.pagination');
        page.appendChild(li);
    }
}