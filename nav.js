function openNav() {
    document.getElementById("mobile-menu").style.width = "100%";
}

function closeNav() {
    document.getElementById("mobile-menu").style.width = "0%";
}

const $form = document.querySelector('#form')

    $form.addEventListener('submit', handleSubmit)

    async function handleSubmit(event) {
      event.preventDefault()
      const form = new FormData(this)
      const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
          'Accept': 'application/json'
        }
      })
      if (response.ok) {
        this.reset()
        alert('Gracias por contactarte, te escribo a la brevedad')
      }
    }