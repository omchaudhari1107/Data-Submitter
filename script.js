document.getElementById("btn").addEventListener('click', e => {
    e.preventDefault()
    document.getElementById("message").style.display = "none"
    msg = document.getElementById("message").style.display
    nam = document.getElementById("name").value
    textarea = document.getElementById("textarea").value
    if (!nam || !textarea) {
        alert("Please fillup the fields")
        return 0
    }

    var form = document.getElementById("form")
    form.action = "https://sheetdb.io/api/v1/gp2ccx0uqamcv"

    try {
        fetch(form.action, {
            method: 'POST',
            body: new FormData(form)
        }).then(
            document.getElementById("message").style.display = "block",
            document.getElementById("message").style.textAlign = "Center",
            document.getElementById("message").style.margin = "10px",
            document.getElementById("message").style.fontFamily = "'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif",
            document.getElementById("message").style.fontSize = "20px",
            document.getElementById("message").style.fontWeight = "bold",
            document.getElementById("message").style.color = "yellowgreen",

        )
            .then(res => {
                console.log(res)
            })
    }
    catch (e) {
        alert("Error:" + e)
    }

},

)

