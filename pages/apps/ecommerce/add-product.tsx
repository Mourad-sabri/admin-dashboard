import { useFormikContext } from "formik"
import Head from "next/head"
import { ReactElement } from "react"
import { CurrencyDollar, PlusLg, X } from "react-bootstrap-icons"
import { S_AddProducts } from "../../../admin/apps/ecommerce/ecommerceApps.styled"
import Button from "../../../admin/core/Buttons/Button"
import Divider from "../../../admin/core/Dividers/Divider"
import ArrayInputs from "../../../admin/core/Forms/ArrayInputs"
import { CheckBoxFormGroup } from "../../../admin/core/Forms/CheckBoxFormGroup"
import { DropZoneFormGroup } from "../../../admin/core/Forms/DropZoneGroup"
import { FormGroup } from "../../../admin/core/Forms/FormGroup"
import { InputFormGroup } from "../../../admin/core/Forms/InputFormGroup"
import { SelectFormGroup } from "../../../admin/core/Forms/SelectFormGroup"
import { TextEditorGroup } from "../../../admin/core/Forms/TextEditorGroup"
import { Layout } from "../../../admin/layouts"

const AddProduct = () => {
  const addProductValues = {
    productName: "",
    description: "",
    price: "",
    comparePrice: "",
    costPerItem: "",
    sku: "",
    barCode: "",
    availiable: "",
    shippingPrice: "",
    media: [],
    trackquantity: false,
    freeshipping: false,
    variant: [{ variantName: "", Variantvalue: "", quantity: 0 }],
  }

  const variantOptions = [
    { label: "color", value: "color" },
    { label: "size", value: "size" },
  ]

  console.log(ArrayInputs.displayName)

  return (
    <S_AddProducts>
      <Head>
        <title> add product </title>
      </Head>
      <FormGroup className="form" initialValues={addProductValues} onSubmit={(values) => console.log(values)}>
        {/* product info */}
        <div className="addProduct__info">
          <InputFormGroup name="productName" label="Product Name" />
          <TextEditorGroup name="description" label="Product Description" />
        </div>
        <div className="addProduct__info">
          {/* product media */}
          <div className="addProduct__title"> Media </div>
          <DropZoneFormGroup name="media" />
        </div>
        <div className="addProduct__info">
          {/* product pricing */}
          <div className="addProduct__title"> Pricing </div>
          <InputFormGroup name="price" label="Product Price" type="number" icon={<CurrencyDollar />} />
          <InputFormGroup name="comparePrice" label="Compare at Price" type="number" icon={<CurrencyDollar />} />
          <InputFormGroup name="costPerItem" label="Cost Per Item" type="number" icon={<CurrencyDollar />} />
        </div>
        <div className="addProduct__info">
          {/* product Inventory */}
          <div className="addProduct__title"> Inventory </div>
          <InputFormGroup name="sku" label="SKU" />
          <InputFormGroup name="barCode" label="Bar Code" icon={<CurrencyDollar />} />
          <Divider title="Quantity" spaceTop={10} />
          <InputFormGroup name="availiable" label="Availiable" type="number" />
          <div className="addProduct__checkBox">
            <CheckBoxFormGroup name="trackquantity" label="Track Quantity" />
          </div>
        </div>
        <div className="addProduct__info">
          {/* product shipping */}
          <div className="addProduct__title"> Shipping </div>
          <InputFormGroup name="shippingPrice" label="Shipping Price" type="number" />
          <div className="addProduct__checkBox">
            <CheckBoxFormGroup name="freeshipping" label="Free Shipping" />
          </div>
        </div>
        <ArrayInputs name="variant">
          {({ remove, push, values }) => {
            return (
              <div className="addProduct__info">
                {/* product variant */}
                <div className="addProduct__title"> Variants </div>
                {values && values.variant && values.variant.length > 0
                  ? values.variant.map((value: any, i: number) => {
                      return (
                        <div key={i} className="addProduct__arrayInputs">
                          <div className="variant-index">variant {i + 1} </div>
                          <SelectFormGroup
                            create
                            options={variantOptions}
                            name={`variant.${i}.variantName`}
                            label="variant"
                            className="array-input"
                          />
                          <InputFormGroup name={`variant.${i}.Variantvalue`} label="value" className="array-input" />
                          <InputFormGroup name={`variant.${i}.quantity`} label="Quantity" className="array-input" type="number" />
                          <div className="add-btn-container">
                            <Button onClick={() => remove(i)} className="add-btn" size="sm" intent="error" icon={<X />} />
                          </div>
                        </div>
                      )
                    })
                  : null}
                <div className="add-variant-btn">
                  <Button icon={<PlusLg />} onClick={() => push({ variantName: "", Variantvalue: "", quantity: 0 })} intent="success" size="sm">
                    add Variant
                  </Button>
                </div>
              </div>
            )
          }}
        </ArrayInputs>
        <div className="addProduct__btn">
          {/* submit button */}
          <Button size="sm" intent="success">
            submit
          </Button>
        </div>
      </FormGroup>
    </S_AddProducts>
  )
}

export default AddProduct

AddProduct.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
