export const confirm = (message) => {
  return new Promise((resolve, reject) => {
    if (window.confirm(message)) {
      resolve()
    }

    reject(new Error('Cancelled'))
  })
}

export const alert = (message) => {
  return new Promise((resolve, reject) => {
    window.alert(message)

    resolve()
  })
}

export const prompt = (message, defaultValue) => {
  return new Promise((resolve, reject) => {
    const response = window.prompt(message, defaultValue)

    if (response === null) {
      reject(new Error('Cancelled'))
    }

    resolve(response)
  })
}
