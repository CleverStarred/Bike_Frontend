import React, { Component, PropTypes } from 'react';
import { Modal, Button } from 'react-bootstrap';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import MappingPanelComponent from '../mappingPanel/component';

class AddAdPageComponent extends Component {

  render() {
    const getSelectField = (name, ref, options) => (
      <div className="form-group">
        <label className="col-md-3 col-md-offset-1 control-label">{name}</label>
        <div className="col-md-4">
          <select refs={ref} className="form-control">
            <option value="1">Ожидание данных</option>
          </select>
        </div>
      </div>
    );

    const getInputField = (name, ref, placeholder) => (
      <div className="form-group">
        <label className="col-md-3 col-md-offset-1 control-label">{name}</label>
        <div className="col-md-4">
          <input type="text" ref={ref} placeholder={placeholder} className="form-control" />
        </div>
      </div>
    );
    const getTextareaField = (name, ref, rows, placeholder) => (
      <div className="form-group">
        <label className="col-md-3 col-md-offset-1 control-label">{name}</label>
        <div className="col-md-4">
          <textarea type="text" ref={ref} rows={rows} placeholder={placeholder} className="form-control" />
        </div>
      </div>
    );

    const getFileField = (name, ref) => (
      <div className="form-group">
        <label className="col-md-3 col-md-offset-1 control-label">{name}</label>
        <div className="col-md-4">
          <input type="file" ref={ref} />
        </div>
      </div>
    );

    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <div className="panel-body">
              <h4 className="text-center">Ok! We are almost there.</h4>
              <p className="text-center">
                Now that you have joined us, place your Ad to make some money fast.
              </p>
            </div>
          </div>
        </div>
        <MappingPanelComponent step={2} />
        <div className="row">
          <div className="col-md-12">
            <div className="panel">
              <div className="panel-heading">
                <h4 className="text-center">Создать объявление</h4>
                <p className="text-center">
                  Complete the below details to create your ad and start selling in minutes.
                  It's safe, it's fast and it works.
                </p>
              </div>
              <div className="panel-body">
                <form className="form-horizontal">
                  {getSelectField('Категория', 'category')}
                  {getSelectField('Бренд', 'brand')}
                  {getSelectField('Новый/Используемый', 'new_or_used')}
                  {getSelectField('Год', 'year')}
                  {getInputField('Цена', 'price')}
                  {getInputField('Заголовок', 'title', 'Введите заголовок')}
                  {getTextareaField('Описание', 'description', 10, 'Введите описание')}
                  {getTextareaField('Спецификация', 'specifications', 4, 'Введите детальное описание')}
                  <div className="form-group">
                    <label className="col-md-3 col-md-offset-1 control-label">Загрузка изображений</label>
                    <div className="col-md-4">
                      <p>
                        The image you choose is what's going to get people engaged. Select a "wish you were here"
                        image that is indicative of the experience that they will be looking forward to. Choose a couple
                        of good, high resolution, images that really stand out. It is important to never leave your image
                        placement empty.
                      </p>
                    </div>
                  </div>
                  {getFileField('Изображение 1(Главное)', 'photo_1')}
                  {getFileField('Изображение 2', 'photo_2')}
                  {getFileField('Изображение 3', 'photo_3')}
                  {getFileField('Изображение 4', 'photo_4')}
                  <div className="form-group">
                    <div className="col-md-4 col-md-offset-4">
                      <button
                        type="button"
                        className="btn btn-block btn-lg btn-danger waves-effect waves-light w-lg m-b-5"
                      >
                        <span>Создать</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddAdPageComponent;
