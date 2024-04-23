/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { IconRefresh } from '@tabler/icons-react';
import { IconDeviceFloppy } from '@tabler/icons-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

class TodoForm extends Component {
    render() {
        const {
            handleChange,
            handleChangeSubmit,
            handleChangeStatus,
            handleReset,
            handleSubmit,
            error,
            form
        } = this.props

        return (
            <>
                <form action="#" className='shadow-sm p-4 rounded-4'>
                    <h3>Todo</h3>

                    <div className='mb-3'>
                        <label htmlFor="task" className='from-tabel'>Tugas</label>
                        <input onChange={handleChange} type="text" className={`form-control ${error.task && 'is-invalid'}`} id='task' name='task' value={form.task} />
                        {error.task && (
                            <div className='invalid-feedback'>{error.task}</div>
                        )}

                        <label htmlFor="description" className='from-tabel'>Deskripsi</label>
                        <textarea onChange={handleChange} id='description' className={`form-control ${error.description && 'is-invalid'}`} name='description' value={form.description} rows="3" />
                        {error.description && (
                            <div className='invalid-feedback'>{error.description}</div>
                        )}
                    </div>

                    <div className='form-check'>
                        <input onChange={handleChangeStatus} type="checkbox" className='form-check-input' id='status' checked={form.status} />
                        <label htmlFor="status" className='form-check-label'>Selesai</label>
                    </div>
                    <div className='d-flex gap-2 mt-4'>
                        <button type='submit' onClick={handleSubmit} className='btn btn-primary me-2 d-flex align-items-center gap-2'>
                            <i>
                                <IconDeviceFloppy />
                                Submit
                            </i>
                        </button>
                        <button type='submit' onClick={handleReset} className='btn btn-danger text-white me-2 d-flex align-items-center gap-2'>
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

TodoForm.propTypes = {
    handleChangeSubmit : PropTypes.func,
    handleChange : PropTypes.func,
    handleChangeStatus : PropTypes.func,
    handleReset : PropTypes.func,
    error : PropTypes.object,
    form : PropTypes.object
}


export default TodoForm;