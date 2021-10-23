window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('#title'),
        aftr = document.querySelector('#aftr'),
        data = document.querySelector('#data'),
        body = document.querySelector('#body'),
        btn = document.querySelector('.btn');


    btn.addEventListener('click', (event) => {
        event.preventDefault()
        if (title.value == "" && aftr.value == "" && data.value == "") {
            alert("Uzur malumot kiriting")
        }
        else {
            const rowText = document.createElement('tr')
            const rowtitle = document.createElement('td')
            rowtitle.innerHTML = title.value
            rowText.appendChild(rowtitle)

            const rowAftr = document.createElement('td')
            rowAftr.innerHTML = aftr.value
            rowText.appendChild(rowAftr)

            const rowData = document.createElement('td')
            rowData.innerHTML = data.value
            rowText.appendChild(rowData)

            body.appendChild(rowText)
            title.value = ""
            aftr.value = ""
            data.value = ""
        }

    })

})