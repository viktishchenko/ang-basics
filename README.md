- init empty

<details>

```js
git switch --orphan test4
New-Item .gitignore
New-Item README.md
mkdir test4
cd test4
ng new form --directory ./
git commit --allow-empty -m "Initial"
git push -u origin test3

```

</details>

- template-driven vs reactive forms

<details>

- forms state
  ![Alt text](test4/src/readmeAssets/TDFvsRF/formState.png)
- form model
  ![Alt text](test4/src/readmeAssets/TDFvsRF/formModel.png)
- template-driven forms
  ![Alt text](test4/src/readmeAssets/TDFvsRF/templateDrivenForm.png)
- reactive Forms
  ![Alt text](test4/src/readmeAssets/TDFvsRF/reactiveForms.png)
- directives
  ![Alt text](test4/src/readmeAssets/TDFvsRF/formDirectives.png)
- directives TDF vs RFM
  ![Alt text](test4/src/readmeAssets/TDFvsRF/formDirectivesVs.png)
- basic HTML form
  ![Alt text](test4/src/readmeAssets/TDFvsRF/basicHTMLForm.png)
- basic template-driven forms
  ![Alt text](test4/src/readmeAssets/TDFvsRF/TDForms.png)
- basic reactive forms
  ![Alt text](test4/src/readmeAssets/TDFvsRF/RForms.png)

</details>

- init app + template-driven form example

<details>

```js
// add components
ng g c views/home/welcome --flat --skip-tests --inline-style --dry-run
ng g c views/error-page/page-not-found --flat --skip-tests --inline-style --inline-template --dry-run
ng g c views/customers/customer --flat --skip-tests --inline-style --dry-run
// add routing
ng generate module app-routing --flat --module=app
```

### angular template-driven form example

![Alt text](test4/src/readmeAssets/TDFvsRF/tdf-example.png)

</details>

- reactive form e.g.

<details>

- reactive forms
  ![Alt text](test4/src/readmeAssets/RFModel/reactiveForm.png)
- create a formGroup
  ![Alt text](test4/src/readmeAssets/RFModel/createFormGroup.png)

```js
// add component
ng g c views/clients/client --flat --skip-tests --inline-style --dry-run
```

- binding form model
  ![Alt text](test4/src/readmeAssets/RFModel/bindFormGroup.png)
- accessing form model properties
  ![Alt text](test4/src/readmeAssets/RFModel/formGroupAccessing.png)

</details>
