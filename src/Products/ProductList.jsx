// > Adam A.M.:
// import { IconEditCircle } from "@tabler/icons-react";
// import { IconTrash } from "@tabler/icons-react";
// import { IconPlus } from "@tabler/icons-react";
// import { Link } from "react-router-dom";
// import ProductService from "../../../services/ProductService";
// import { useEffect } from "react";
// import { useState } from "react";
// import { useMemo } from "react";
// import { useSearchParams } from "react-router-dom";
// import { useForm } from "react-hook-form";
//
// function ProductList() {
//     const [products, setProducts] = useState([]);
//     const [searchParam, setSearchParam] = useSearchParams();
//     const productService = useMemo(() => ProductService(), []);
//     const { handleSubmit, register } = useForm();
//
//     const search = searchParam.get("q")"";
//     const page = searchParam.get("page")"1";
//     const size = searchParam.get("size")"10";
// };
//
// const handleNextPage = () => {
//     if (page >= paging.totalPages) return;
//     setSearchParam({ q: "", page: +page + 1, size: size });
// };
//
// const handlePreviousPage = () => {
//     if (page <= 1) return;
//     setSearchParam({ q: "", page: +page - 1, size: size });
// };
//
// const navigatePage = (page) => {
//     if (!page) return;
//     setSearchParam({ q: "", page: page, size: size });
// };
//
// const handleDelete = async (id) => {
//     if (!confirm("apakah yakin product ini ingin dihapus?")) return;
//     try {
//         const response = await productService.deleteById(id);
//         if (response.statusCode === 200) {
//             const data = await productService.getAll();
//             setProducts(data.data);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };
//
// useEffect(() => {
//     const getProducts = async () => {
//         try {
//             const data = await productService.getAll({
//                 q: search,
//                 page: page,
//                 size: size,
//             });
//             setProducts(data.data);
//             setPaging(data.paging);
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     getProducts();
// }, [page, productService, search, searchParam, size]);
//
// return (
//     <div className="p-4 shadow-sm rounded-2">
//         <div className="d-flex justify-content-between align-items-center mb-3">
//             <h3>Product List</h3>
//             <Link className="btn btn-primary" to="/dashboard/product/new">
//                 <i className="me-2">
//                     <IconPlus />
//                 </i>
//                 Tambah Produk
//             </Link>
//         </div>
//         <div className="d-flex justify-content-between align-items-center mt-4">
//             <div className="row">
//                 <div className="col-12">
//                     <select
//                         className="form-select"
//                         name="size"
//                         id="size"
//                         onChange={(e) => {
//                             setSearchParam({ q: search, page, size: e.target.value });
//                         }}
//                     >
//                         <option value="10">10</option>
//                         <option value="25">25</option>
//                         <option value="50">50</option>
//                         <option value="100">100</option>
//                     </select>
//                 </div>
//             </div>
//             <form onSubmit={handleSubmit(onSubmitSearch)} autoComplete="off">
//                 <input
//                     {...register("search")}
//                     placeholder="search"
//                     className="form-control"
//                     type="search"
//                     name="search"
//                     id="search"
//                 />
//             </form>
//         </div>
//
//         > Adam A.M.:
//         <hr />
//         <div className="table-responsive mt-4">
//             <table className="table overflow-auto">
//                 <thead>
//                 <tr>
//                     <th>No</th>
//                     <th>Nama</th>
//                     <th>Harga</th>
//                     <th>Stok</th>
//                     <th>Gambar</th>
//                     <th>Aksi</th>
//                 </tr>
//                 </thead>
//                 <tbody>
//                 {products.map((product, index) => (
//                     <tr key={product.id}>
//                         <td>{index + 1}</td>
//                         <td>{product.name}</td>
//                         <td>{product.price}</td>
//                         <td>{product.stock}</td>
//                         <td>
//                             <img
//                                 className="img-fluid"
//                                 width={100}
//                                 height={100}
//                                 src={product.image.url}
//                                 alt={product.image.name}
//                             />
//                         </td>
//                         <td>
//                             <div className="btn-group">
//                                 <Link
//                                     to={/dashboard/product/update/${product.id}}
//                                     className="btn btn-primary"
//                                 >
//                                     <i>
//                                         <IconEditCircle />
//                                     </i>
//                                 </Link>
//                                 <button
//                                     onClick={() => handleDelete(product.id)}
//                                     className="btn btn-danger"
//                                 >
//                                     <i className="text-white">
//                                         <IconTrash />
//                                     </i>
//                                 </button>
//                             </div>
//                         </td>
//                     </tr>
//                 ))}
//                 </tbody>
//             </table>
//         </div>
//
//         <div className="d-flex align-items-center justify-content-between mt-4">
//             <small>
//                 Show data {products.length} of {paging.totalElement}
//             </small>
//             <nav aria-label="Page navigation example">
//                 <ul className="pagination">
//                     <li
//                         className={page-item ${!paging.hasPrevious ? "disabled" : ""}}
//                     >
//                         <button
//                             disabled={!paging.hasPrevious}
//                             onClick={handlePreviousPage}
//                             className="page-link"
//                         >
//                             Previous
//                         </button>
//                     </li>
//                     {[...Array(paging.totalPages)].map((_, index) => {
//                         const currentPage = index + 1;
//                         return (
//                             <li
//                                 key={index}
//                                 className={`page-item ${
//                                     paging.page === currentPage ? "active" : ""
//                                 }`}
//                             >
//                                 <button
//                                     onClick={() => navigatePage(currentPage)}
//                                     className="page-link"
//                                 >
//                                     {currentPage}
//                                 </button>
//                             </li>
//                         );
//                     })}
//                     <li className={page-item ${!paging.hasNext ? "disabled" : ""}}>
//                         <button
//                             disabled={!paging.hasNext}
//                             className="page-link"
//                             onClick={handleNextPage}
//                         >
//                             Next
//                         </button>
//                     </li>
//                 </ul>
//             </nav>
//         </div>
//     </div>
// );
// }
//
// export default ProductList;
