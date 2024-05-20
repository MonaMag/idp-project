import { FC, memo, useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Button, Checkbox, CheckboxProps, Input, Select, SelectProps } from 'antd';
import cls from './AddArticleForm.module.scss';
import { Article } from '../../entities/Article/model/types/types';
import { classNames } from '../../shared/classNames/classNames';

export interface AddArticleFormProps {
  className?: string;
  createArticle: (article: Article) => void;
  onClose: () => void;
  onOk: () => void;
}

const { TextArea } = Input;

const optionsType: SelectProps['options'] = [
  { value: 'IT', label: 'IT' },
  { value: 'ALL', label: 'ALL' },
  { value: 'SCIENCE', label: 'SCIENCE' },
  { value: 'ECONOMICS', label: 'ECONOMICS' },
];

const optionsDirection: SelectProps['options'] = [
  { value: 'administration', label: 'Администрирование' },
  { value: 'programming', label: 'Программирование' },
  { value: 'design', label: 'Дизайн' },
  { value: 'architecture', label: 'Архитектура' },
];

const optionsCountries: SelectProps['options'] = [
  { value: 'China', label: 'Китай' },
  { value: 'USA', label: 'США' },
  { value: 'India', label: 'Индия' },
  { value: 'Japan', label: 'Япония' },
  { value: 'Russia', label: 'Россия' },
  { value: 'Germany', label: 'Германия' },
];

const AddArticleForm: FC<AddArticleFormProps> = memo(({ onClose, onOk, createArticle }) => {
  const [isSubtitle, setIsSubtitle] = useState<boolean>(false);

  const handleCheckboxChange: CheckboxProps['onChange'] = () => {
    setIsSubtitle(!isSubtitle);
  };

  const formik = useFormik({
    initialValues: {
      title: '',
      subtitle: '',
      paragraph: '',
      type: '',
      bibliography: '',
      direction: '',
      countries: [],
      createdArt: new Date().toLocaleString(),
    },
    validationSchema: Yup.object({
      title: Yup.string()
        /*.matches(/^[a-z0-9]$/, 'Наименование статьи содержит цифры, строчные буквы, символы - и _')*/
        .max(40, 'Количество символов не должно превышать 20')
        .required('Введите название статьи'),
      /*    subtitle: Yup.string()
        .min(20, 'Количество символов не менее 20')
        .max(100, 'Количество символов не должно превышать 100')
        .required('Введите краткое описание статьи'),*/
      paragraph: Yup.string()
        .min(20, 'Количество символов не менее 20')
        .required('Ведите текст статьи'),
      type: Yup.string().required('Выберите тип ститьи'),
      /* .oneOf(['IT', 'ALL', 'SCIENCE', 'ECONOMICS'], 'Invalid type')*/
    }),
    onSubmit: (values) => {
      createArticle(values);
      console.log('Submit', values);
      formik.resetForm();
      onOk();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} className={cls.wrapper}>
        <div className={cls.inputWrapper}>
          <div className={cls.item}>
            <label htmlFor="title" className={cls.label}>
              Название статьи
            </label>
            <Input
              name="title"
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.title}
              className={classNames(cls.input, {
                [cls.errorInput]: formik.errors.title,
              })}
            />
            {formik.touched.title && formik.errors.title ? (
              <div className={cls.error}>{formik.errors.title}</div>
            ) : null}
          </div>
          <div className={cls.item}>
            <Checkbox onChange={handleCheckboxChange}>Добавить краткое описание</Checkbox>
          </div>
          {isSubtitle && (
            <div className={cls.item}>
              <label htmlFor="title" className={cls.label}>
                Краткое описание
              </label>
              <Input
                id="subtitle"
                name="subtitle"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.subtitle}
                disabled={!isSubtitle}
                className={classNames(cls.input, {
                  [cls.errorInput]: formik.errors.subtitle,
                })}
              />
              {formik.touched.subtitle && formik.errors.subtitle ? (
                <div className={cls.error}>{formik.errors.subtitle}</div>
              ) : null}
            </div>
          )}
          <div className={cls.item}>
            <label htmlFor="paragraph" className={cls.label}>
              Статья
            </label>
            <TextArea
              id="paragraph"
              name="paragraph"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.paragraph}
            />
            {formik.touched.paragraph && formik.errors.paragraph ? (
              <div className={cls.error}>{formik.errors.paragraph}</div>
            ) : null}
          </div>
          <div>
            <div className={cls.item}>
              <label htmlFor="type" className={cls.label}>
                Выберите тип статьи
              </label>
              <Select
                id="type"
                className={cls.select}
                value={formik.values.type}
                onChange={(value) => {
                  formik.setFieldValue('type', value);
                }}
                onBlur={formik.handleBlur}
                onSelect={formik.handleChange}
                options={optionsType}
              />
              {formik.touched.type && formik.errors.type ? (
                <div className={cls.error}>{formik.errors.type}</div>
              ) : null}
            </div>
            {formik.values.type && formik.values.type === 'SCIENCE' && (
              <div className={cls.item}>
                <label htmlFor="bibliography" className={cls.label}>
                  Список литературы
                </label>
                <Input
                  id="bibliography"
                  name="bibliography"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.bibliography}
                />
                {formik.touched.bibliography && formik.errors.bibliography ? (
                  <div className={cls.error}>{formik.errors.bibliography}</div>
                ) : null}
              </div>
            )}
            {formik.values.type && formik.values.type === 'IT' && (
              <div className={cls.item}>
                <label htmlFor="direction " className={cls.label}>
                  Подкатегория
                </label>
                <Select
                  id="direction"
                  className={cls.select}
                  value={formik.values.direction}
                  onChange={(value) => {
                    formik.setFieldValue('direction', value);
                  }}
                  onBlur={formik.handleBlur}
                  onSelect={formik.handleChange}
                  options={optionsDirection}
                />
              </div>
            )}
            {formik.values.type && formik.values.type === 'ECONOMICS' && (
              <div className={cls.item}>
                <label htmlFor="countries" className={cls.label}>
                  Страна
                </label>
                <Select
                  id="countries"
                  className={cls.select}
                  value={formik.values.countries}
                  onChange={(value) => {
                    formik.setFieldValue('countries', value);
                  }}
                  onBlur={formik.handleBlur}
                  onSelect={formik.handleChange}
                  options={optionsCountries}
                />
              </div>
            )}
          </div>
          <Button htmlType="submit" className={cls.button}>
            Создать
          </Button>
        </div>
      </form>
    </div>
  );
});

export default AddArticleForm;
