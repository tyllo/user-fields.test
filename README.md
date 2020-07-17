# user-fields.test

Необходимо сделать компонент админки для отображения, редактирования и сохранения полей пользователя. Сама страница генерируется на основе объекта в котором хранится информация о всех полях:
 
<details>
  <summary>Структура</summary>

  ```
  const userFields = [ 
    { 
      label:     "Name", 
      field:     "name", 
      type:      "string", 
      validator: nameValidator, 
    }, 
    { 
      label:     "Gender", 
      field:     "gender", 
      type:      "select", 
      validator: genderValidator, 
      meta: { 
        "values": [ 
            { 
              "label": "Male", 
              "value": "male" 
            }, 
            { 
              "label": "Female", 
              "value": "female" 
            }, 
          ] 
      }, 
    }, 
    { 
      label:     "Subscription", 
      field:     "sub", 
      type:      "date", 
      validator: dateValidator, 
    }, 
  ] 
  ```
</details>


И данных, полученных с бэкенда:

<details>
  <summary>Структура</summary>

  ```
  var userData = { 
    "name":   "User Name", 
    "gender": "male", 
    "sub":    "2020-03-04T13:40Z", 
  } 
  ```
</details> 

- В зависимости от типа поля меняется его отображение: если **string**, то просто поле  ввода, если **date**, то дата и возможность выбрать другую из открывающегося календаря, если **bool**, то чекбокс и тд. 
- Для каждого поля есть **валидатор** (метод), который проверит, что админ правильно редактирует данные. 
 

> Такой подход позволит при изменении списка полей пользователя изменить только `userFields`, не затрагивая сам компонент. 

> Важно показать хорошую поддерживаемую архитектуру, а не реализацию "визуально работает, под капотом - дичь".
