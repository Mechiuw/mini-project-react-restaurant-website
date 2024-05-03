// > Adam A.M.:
// import { useState } from "react";
// import { IconX } from "@tabler/icons-react";
// import { IconDeviceFloppy } from "@tabler/icons-react";
// import { useForm } from "react-hook-form";
// import { useNavigate, useParams } from "react-router-dom";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";
// import ProductService from "../../../services/ProductService";
// import { useEffect } from "react";
//
// const createSchema = z.object({
//     id: z.string().optional(),
//     name: z.string().min(1, "name wajib di isi!"),
//     price: z
//         .string()
//         .refine((val) => !isNaN(parseFloat(val)), "harga harus berupa angka")
//         .transform((val) => parseInt(val))
//         .refine((val) => val >= 0, "harga harus lebih dari 0"),
//     stock: z
//         .string()
//         .refine((val) => !isNaN(parseInt(val)), "stok harus berupa angka")
//         .transform((val) => parseInt(val))
//         .refine((val) => val >= 0, "stock harus lebih dari 0"),
//     image: z
//         .any()
//         .refine(
//             (files) =>
//                 files.length !== 0 &&
//                 ["image/png", "imgae/jpg", "image/jpeg"].includes(files[0].type),
//             "format gambar tidak sesuai"
//         ),
// });
//
// const updateSchema = z.object({
//     id: z.string().optional(),
//     name: z.string().min(1, "name wajib di isi!"),
//     price: z
//         .string()
//         .refine((val) => !isNaN(parseFloat(val)), "harga harus berupa angka")
//         .transform((val) => parseInt(val))
//         .refine((val) => val >= 0, "harga harus lebih dari 0"),
//     stock: z
//         .string()
//         .refine((val) => !isNaN(parseInt(val)), "stok harus berupa angka")
//         .transform((val) => parseInt(val))
//         .refine((val) => val >= 0, "stock harus lebih dari 0"),
//     image: z
//         .any()
//         .optional()
//         .refine((files) => {
//             if (files.length === 0) return true;
//             return ["image/png", "imgae/jpg", "image/jpeg"].includes(files[0].type);
//         }, "format gambar tidak sesuai"),
// });
//
// const productService = ProductService();
//
// function ProductForm() {
//     const { id } = useParams();
//
//     const {
//         register,
//         handleSubmit,
//         formState: { errors, isValid },
//         clearErrors,
//         reset,
//         setValue,
//         trigger,
//     } = useForm({
//         mode: "onChange",
//         resolver: zodResolver(id ? updateSchema : createSchema),
//     });
//     const navigate = useNavigate();
//
//     const [previewImage, setPreviewImage] = useState(
//         "https://lh5.googleusercontent.com/proxy/t08n2HuxPfw8OpbutGWjekHAgxfPFv-pZZ5_-uTfhEGK8B5Lp-VN4VjrdxKtr8acgJA93S14m9NdELzjafFfy13b68pQ7zzDiAmn4Xg8LvsTw1jogn_7wStYeOx7ojx5h63Gliw"
//     );
//
//     const handleImageChange = (e) => {
//         const { files } = e.target;
//         const urlImage = URL.createObjectURL(files[0]);
//         setPreviewImage(urlImage);
//     };
//
//     const handleBack = () => {
//         clearForm();
//         navigate("/dashboard/product");
//     };
//
//     const onSubmit = async (data) => {
//         if (data.id) {
//             try {
//                 const form = new FormData();
//                 const product = {
//                     id: data.id,
//                     name: data.name,
//                     price: data.price,
//                     stock: data.stock,
//                 };
//                 form.append("product", JSON.stringify(product));
//                 form.append("image", data.image[0]);
//                 await productService.update(form);
//                 clearForm();
//                 navigate("/dashboard/product");
//             } catch (err) {
//                 console.log(err);
//             }
//         } else {
//             try {
//                 const form = new FormData();
//                 const product = {
//                     name: data.name,
//                     price: data.price,
//                     stock: data.stock,
//                 };
//                 form.append("product", JSON.stringify(product));
//                 form.append("image", data.image[0]);
//                 await productService.create(form);
//                 clearForm();
//                 navigate("/dashboard/product");
//             } catch (err) {
//                 console.log(err);
//             }
//         }
//     };
//
//     const clearForm = () => {
//         clearErrors();
//         reset();
//     };
//
// > Adam A.M.:
//     useEffect(() => {
//         if (id) {
//             const getProductById = async () => {
//                 try {
//                     const response = await productService.getById(id);
//                     const currentProduct = response.data;
//                     setValue("id", currentProduct.id);
//                     setValue("name", currentProduct.name);
//                     setValue("price", currentProduct.price.toString());
//                     setValue("stock", currentProduct.stock.toString());
//                     setPreviewImage(currentProduct.image.url);
//                     trigger();
//                 } catch (error) {
//                     console.log(error);
//                 }
//             };
//             getProductById();
//         }
//     }, [id, setValue, trigger]);
//
//     return (
//         <div className="shadow-sm p-4 rounded-2">
//             <h2 className="mb-4">Form Product</h2>
//             <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
//                 <div className="mb-3">
//                     <label htmlFor="name" className="form-label required">
//                         Nama
//                     </label>
//                     <input
//                         {...register("name")}
//                         type="text"
//                         className={form-control ${errors.name && "is-invalid"}}
//                         name="name"
//                         id="name"
//                     />
//                     {errors.name && (
//                         <div className="invalid-feedback">{errors.name.message}</div>
//                     )}
//                 </div>
//                 <div className="row-rows-cols-2">
//                     <div className="mb-3">
//                         <label htmlFor="price" className="form-label required">
//                             Harga
//                         </label>
//                         <input
//                             {...register("price")}
//                             type="number"
//                             className={form-control ${errors.price && "is-invalid"}}
//                             name="price"
//                             id="price"
//                         />
//                         {errors.price && (
//                             <div className="invalid-feedback">{errors.price.message}</div>
//                         )}
//                     </div>
//                     <div className="mb-3">
//                         <label htmlFor="stock" className="form-label required">
//                             Stok
//                         </label>
//                         <input
//                             {...register("stock")}
//                             type="number"
//                             className={form-control ${errors.stock && "is-invalid"}}
//                             name="stock"
//                             id="stock"
//                         />
//                         {errors.stock && (
//                             <div className="invalid-feedback">{errors.stock.message}</div>
//                         )}
//                     </div>
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="image" className="form-label">
//                         <span className="required">Gambar</span>
//                         <br />
//                         <img
//                             className="img-thumbnail img-fluid"
//                             width={200}
//                             height={200}
//                             src={previewImage}
//                             alt="product"
//                         />
//                     </label>
//                     <input
//                         {...register("image", {
//                             onChange: handleImageChange,
//                         })}
//                         type="file"
//                         accept="image/png, image/jpeg, image/jpg"
//                         className={form-control ${errors.image && "is-invalid"}}
//                         name="image"
//                         id="image"
//                     />
//                     {errors.image && (
//                         <div className="invalid-feedback">{errors.image.message}</div>
//                     )}
//                 </div>
//                 <div className="d-flex gap-2">
//                     <button
//                         type="submit"
//                         disabled={!isValid}
//                         className="d-flex align-items-center btn btn-primary"
//                     >
//                         <i className="me-2">
//                             <IconDeviceFloppy />
//                         </i>
//                         Simpan
//                     </button>
//                     <button
//                         onClick={handleBack}
//                         type="button"
//                         className="d-flex align-items-center btn btn-danger text-white"
//                     >
//                         <i className="me-2">
//                             <IconX />
//                         </i>
//                         Batal
//                     </button>
//                 </div>
//             </form>
//         </div>
//     );
// }
//
// export default ProductForm;
