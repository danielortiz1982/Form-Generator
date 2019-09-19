class FormGenerator{

    constructor(){}

    newForm(form){

        let formName            = form.FormName
        const body              = window.document.getElementsByTagName("body")[0]
        const FGFORM           = window.document.createElement("form")
        FGFORM.name            = formName
        let FormWrapper         = form.Insert
        let FormContainer       = window.document.getElementById(FormWrapper)
        let InsertFormCondition = FormWrapper === "" || FormContainer == null
        let FormConponents      = form.FormConponents

        form.FormAction === ("" || undefined) ? FGFORM.setAttribute("id", formName) : FGFORM.action = form.FormAction
        
        FormConponents.forEach((el, index, array)=>{
            
            const FormField     = window.document.createElement("div")
            const FormLabel     = window.document.createElement("label")
            FormField.setAttribute("class", `form-component`)
            FormField.dataset.component = `component-${index}`

            function createInput(e){
                const FGInput      = window.document.createElement("input")
                let InputID         = e.id === "" 
                let InputClass      = e.class === ""
                let IDCondition     = InputID && InputClass
                let ClassCondition  = InputClass
                let FGClass        = FGInput.setAttribute("class", "FG-input")
                FGInput.name       = e.FormComponentName
                FGInput.setAttribute("type", e.type)
                FGInput.setAttribute("placeholder", e.placeholder)
                IDCondition ? FGClass : FGInput.setAttribute("id", e.id)
                ClassCondition ? FGClass : FGInput.setAttribute("class", e.class)
                FGInput.setAttribute("value", e.value)
                FormLabel.innerHTML = e.FormLabel + " "
                FormField.appendChild(FormLabel)
                FormField.appendChild(FGInput)
                FGFORM.appendChild(FormField)
            }

            function createTextarea(e){
                const FGTextarea   = window.document.createElement("textarea")
                FGTextarea.name    = e.FormComponentName
                FGTextarea.setAttribute("rows", e.rows)
                FGTextarea.setAttribute("cols", e.cols)
                FGTextarea.setAttribute("value", e.value)
                FGTextarea.setAttribute("maxlength", e.maxlength)
                FGTextarea.setAttribute("class", e.class)
                FGTextarea.setAttribute("id", e.id)
                FormLabel.innerHTML = e.FormLabel + " "
                FGTextarea.setAttribute("placeholder", e.placeholder)
                FormField.appendChild(FormLabel)
                FormField.appendChild(FGTextarea)
                FGFORM.appendChild(FormField)
            }
            
            function createSelect(e){
                const FGSelect = window.document.createElement("select")
                const SelectOptions = e.options
                SelectOptions.forEach((el, index, arr)=>{
                    const FGOption = window.document.createElement("option")
                    FGOption.text = el
                    FGSelect.add(FGOption)
                })
                FGSelect.name = el.FormComponentName
                FGSelect.setAttribute("id", e.id)
                FGSelect.setAttribute("class", e.class)
                FGSelect.setAttribute("value", e.value)
                FormLabel.innerHTML = e.FormLabel + " "
                FormField.appendChild(FormLabel)
                FormField.appendChild(FGSelect)
                FGFORM.appendChild(FormField)
            }
            switch (el.FormConponent) {

                case 'input':
                createInput(el)
                    break

                case 'textarea':
                    createTextarea(el)
                    break

                case "select":
                    createSelect(el)
                    break

                default:
                    break
            }
        })

        InsertFormCondition ? body.appendChild(FGFORM) : FormContainer.appendChild(FGFORM)
    }
}
module.exports.FormGenerator = new FormGenerator