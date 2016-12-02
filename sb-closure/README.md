# sb-closure

## log
### wrap-element_modify-its-props
Use closure to create a element with reduced props. We know from `Cat.js` what `Cat` needs from the `store`. But here it doesn't have access to the store. To access the store the function returned from  `mapStateToProps`  in `Cat.js`

    function mapStateToProps(anElement){
        //returns a function called later with store as its arg and el from here
        return (store)=>{  
            const   props= {
                    catbox: store.catboxr.catbox,
                    name: store.harrysally.name
                }
            return React.createElement(anElement, props)
        }
    }
    Cat = mapStateToProps(Cat)

first grabs the element from its parameter and holds it in closure. It returns a function that returns and element but it doesn't do that until the wrapped `Cat` is called from `App` as `Cat(props)`. The store is passed down to `App` in `app.js`  


    ReactDOM.render(<App {...store}/>, container)

In `App.js` you make the call `Cat(props)` completing the closure and returning the element whose props have been culled from store

    const App = (props) =>{
        const newcat = Cat(props)
        return(
            <div>
                <h4>hello blank es6 rect</h4>
                {newcat}
            </div>
    )}

### init-commit

an example of closure in a single page of code
