import PropTypes from "prop-types";

function Toast({ message, color }) {
    return (
        <div className={`position-absolute toast show top-25 end-0 me-4 mt-3 align-items-center text-bg-${color} text-white border-0`}
             role="alert"
             aria-live="assertive"
             aria-atomic="true">
            <div className="toast-body">
                {message}
                <button className="btn-close btn-close-white me-2 m-auto"
                        type="button"
                        data-bs-dismiss="toast"
                        aria-label="close">
                </button>
            </div>
        </div>
    );
}

Toast.propTypes = {
    message: PropTypes.string,
    color: PropTypes.string,
};

export default Toast;
