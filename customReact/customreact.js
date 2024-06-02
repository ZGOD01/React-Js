function customRender(reactElement, container){
    // const domElemnt = document.createElement(reactElement.type)
    // domElemnt.innerHTML = reactElement.children
    // domElemnt.setAttribute('href', reactElement.props.href)
    // domElemnt.setAttribute('target', reactElement.props.target)

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children

    for(const prop in reactElement.props ){
        if(prop === 'children') continue;
        domElement.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElement)
}

const   reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'Click me to Visit google'
}


const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

