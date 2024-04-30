/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class MenuForm extends Component {
    render() {
        const {
            handleChange,
            handleReset,
            handleSubmit,
            error,
            form
        } = this.props

        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4'>
                    <div className='mb-3'>
                        <label htmlFor="nama" className='from-tabel'>Nama</label>
                        <input onChange={handleChange} type="text" className={`form-control ${error.nama && 'is-invalid'}`} id='nama' name='nama' value={form.nama} />
                        {error.nama && (
                            <div className='invalid-feedback'>{error.nama}</div>
                        )}

                        <label htmlFor="harga" className='from-tabel'>Harga</label>
                        <textarea onChange={handleChange} id='harga' className={`form-control ${error.harga && 'is-invalid'}`} name='harga' value={form.harga} rows="3" />
                        {error.harga && (
                            <div className='invalid-feedback'>{error.harga}</div>
                        )}
                    </div>

                    <div className='d-flex gap-2 mt-4'>
                        <button type='submit' onClick={handleSubmit} className='btn btn-dark text-white me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconDeviceFloppy />
                                Submit
                            </i>
                        </button>
                        <button type='submit' onClick={handleReset} className='btn btn-outline-dark text-black me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconRefresh />
                                Reset
                            </i>
                        </button>
                    </div>
                </form>
            </>
        );
    }
}

MenuForm.propTypes = {
    handleChangeSubmit : PropTypes.func,
    handleChange : PropTypes.func,
    handleChangeStatus : PropTypes.func,
    handleReset : PropTypes.func,
    error : PropTypes.object,
    form : PropTypes.object
}


export default MenuForm;