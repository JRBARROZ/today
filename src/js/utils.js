/**
 * Essa função cria elementos dinamicamente.
 * @param {string} element - Nesse parametro, é definido o elemento a ser criado.
 * @param {{}} attrs - Recebe os atributos do elemento a ser criado
 * @example {id: "0", class:"open close", height:}
 * @param {string} children - e possível passar um texto ou um array de elementos criados.
 * @example 
 * createElement("p", null, "Meu texto") 
 * // Outra Forma Seria
 * const div = document.createElement("div")
 * createElement("div", null, [div, div])
 */

//("section", null, document.createElement("div"))

function createElement(element, attrs, children) {
  const elementToCreate = document.createElement(element);

  if (attrs != null) {
    const attrsArray = Object.entries(attrs);
    for (let i = 0; i < attrsArray.length; i++) {
      elementToCreate.setAttribute(attrsArray[i][0], attrsArray[i][1]);
    }
  }

  if (typeof children == "string") {
    elementToCreate.innerText = children;
  } else {
    children.forEach((child) => {
      elementToCreate.appendChild(child);
    });
  }

  return elementToCreate;
}

const storage = {
  get(key) {
    return localStorage.getItem(key);
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
};

export { storage, createElement };
