class BVFormGenerator{

    constructor(){}

    newForm(form){

        let formName            = form.FormName
        const body              = window.document.getElementsByTagName("body")[0]
        const BVFORM           = window.document.createElement("form")
        BVFORM.name            = formName
        let FormWrapper         = form.Insert
        let FormContainer       = window.document.getElementById(FormWrapper)
        let InsertFormCondition = FormWrapper === "" || FormContainer == null
        let FormConponents      = form.FormConponents

        form.FormAction === ("" || undefined) ? BVFORM.setAttribute("id", formName) : BVFORM.action = form.FormAction
        
        FormConponents.forEach((el, index, array)=>{
            
            const FormField     = window.document.createElement("div")
            const FormLabel     = window.document.createElement("label")
            FormField.setAttribute("class", `form-component`)
            FormField.dataset.component = `component-${index}`

            function createInput(e){
                const BVInput      = window.document.createElement("input")
                let InputID         = e.id === "" 
                let InputClass      = e.class === ""
                let IDCondition     = InputID && InputClass
                let ClassCondition  = InputClass
                let BVClass        = BVInput.setAttribute("class", "BV-input")
                BVInput.name       = e.FormComponentName
                BVInput.setAttribute("type", e.type)
                BVInput.setAttribute("placeholder", e.placeholder)
                IDCondition ? BVClass : BVInput.setAttribute("id", e.id)
                ClassCondition ? BVClass : BVInput.setAttribute("class", e.class)
                BVInput.setAttribute("value", e.value)
                FormLabel.innerHTML = e.FormLabel + " "
                FormField.appendChild(FormLabel)
                FormField.appendChild(BVInput)
                BVFORM.appendChild(FormField)
            }

            function createTextarea(e){
                const BVTextarea   = window.document.createElement("textarea")
                BVTextarea.name    = e.FormComponentName
                BVTextarea.setAttribute("rows", e.rows)
                BVTextarea.setAttribute("cols", e.cols)
                BVTextarea.setAttribute("value", e.value)
                BVTextarea.setAttribute("maxlength", e.maxlength)
                BVTextarea.setAttribute("class", e.class)
                BVTextarea.setAttribute("id", e.id)
                FormLabel.innerHTML = e.FormLabel + " "
                BVTextarea.setAttribute("placeholder", e.placeholder)
                FormField.appendChild(FormLabel)
                FormField.appendChild(BVTextarea)
                BVFORM.appendChild(FormField)
            }
            
            function createSelect(e){
                const BVSelect = window.document.createElement("select")
                const SelectOptions = e.options
                SelectOptions.forEach((el, index, arr)=>{
                    const BVOption = window.document.createElement("option")
                    BVOption.text = el
                    BVSelect.add(BVOption)
                })
                BVSelect.name = el.FormComponentName
                BVSelect.setAttribute("id", e.id)
                BVSelect.setAttribute("class", e.class)
                BVSelect.setAttribute("value", e.value)
                FormLabel.innerHTML = e.FormLabel + " "
                FormField.appendChild(FormLabel)
                FormField.appendChild(BVSelect)
                BVFORM.appendChild(FormField)
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

        InsertFormCondition ? body.appendChild(BVFORM) : FormContainer.appendChild(BVFORM)
    }
}
module.exports.BVFormGenerator = new BVFormGenerator