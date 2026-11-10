import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// COMPONENT
import NavSidebar from "../components/NaviSidebar";
import BlogSidebar from "../components/BlogSidebar";
import Tag from "../components/Tag";
import Information from "../components/Information";
import Loading from "../components/Loading";

// FUNCTION
import { createSlug } from "../util/createSlug";
import { printCategories } from "../data/printCategoriesData";

// FIRESTORE
import { db } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
} from "firebase/firestore";

//HOOKS
import useDocumentTitle from "../hooks/useDocumentTitle";

function CategoriesDetail() {
  const { slug } = useParams();

  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategory = async () => {
      try {
        // BƯỚC 1: Tìm trong Firestore trước (dữ liệu mới thêm qua admin)
        const categoriesRef = collection(db, "categories");
        const q = query(categoriesRef);
        const querySnapshot = await getDocs(q);

        let foundInFirestore = null;
        querySnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          if (createSlug(data.title) === slug) {
            foundInFirestore = { id: docSnap.id, ...data };
          }
        });

        if (foundInFirestore) {
          setCategory(foundInFirestore);
          setLoading(false);
          return;
        }

        // BƯỚC 2: Nếu không có trong Firestore, đọc từ file JSON tĩnh (dữ liệu cũ)
        fetch("/data/categories.json")
          .then((res) => res.json())
          .then((data) => {
            const foundInJson = data.categories.find(
              (c) => createSlug(c.title) === slug
            );
            setCategory(foundInJson);
            setLoading(false);
          })
          .catch((error) => {
            console.error("Error fetching JSON categories:", error);
            setLoading(false);
          });
      } catch (error) {
        console.error("Error fetching category:", error);
        setLoading(false);
      }
    };

    fetchCategory();
  }, [slug]);

  // Tìm thông tin từ printCategories để hiển thị title/icon khi không có nội dung
  const printCategory = printCategories.find(
    (item) => createSlug(item.title) === slug
  );

  // Set page title
  const pageTitle = category
    ? category.title
    : printCategory
      ? printCategory.title
      : "Page not found";
  useDocumentTitle(pageTitle);

  return (
    <div className="categories-detail relative pt-4 pb-10 md:pt-6 lg:py-10">
      <div className="container">
        <div className="categories-detail__grid pb-6 md:pb-8 lg:pb-14 row">
          <div
            className="categories-detail__left col relative order-last lg:order-0"
            style={{ "--col-sm": "12", "--col-md": "4", "--col-lg": "3" }}
          >
            <div className="sticky top-40 pt-6 lg:pt-0 border-t lg:border-t-0">
              <div className="categories-detail__item">
                <NavSidebar />
              </div>
              <div className="categories-detail__item pt-8">
                <BlogSidebar />
              </div>
            </div>
          </div>
          <div
            className="categories-detail__right col"
            style={{ "--col-sm": "12", "--col-md": "8", "--col-lg": "9" }}
          >
            {loading ? (
              <Loading pt="pt-32" />
            ) : category ? (
              <>
                <div className="categories-detail__body">
                  <h3 className="categories-detail__heading text-lg text-emerald-700 uppercase pb-4">
                    {category.title}
                  </h3>
                  <div className="categories-detail__image">
                    <img
                      src={category.imageUrl}
                      alt={category.title}
                      className="object-cover w-full"
                    />
                  </div>
                  <div
                    className="categries__content pt-4"
                    dangerouslySetInnerHTML={{ __html: category.content }}
                  ></div>
                  <div className="categories-detail__info pt-8">
                    <Information />
                  </div>
                </div>
              </>
            ) : printCategory ? (
              // Không tìm thấy trong JSON/Firestore nhưng có trong printCategories -> hiển thị "đang cập nhật"
              <div className="categories-detail__body">
                <div className="flex items-center gap-3 mb-6">
                  <div className={`${printCategory.color} ${printCategory.iconColor} w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0`}>
                    {printCategory.icon}
                  </div>
                  <h3 className="categories-detail__heading text-lg text-emerald-700 uppercase leading-tight">
                    {printCategory.title}
                  </h3>
                </div>
                <div className="bg-[#F9FAFB] rounded-2xl p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#1E1E1E] mb-3">Nội dung đang được cập nhật</h4>
                  <p className="text-gray-500 mb-6">
                    Trang "{printCategory.title}" hiện đang được hoàn thiện. Quý khách vui lòng quay lại sau hoặc liên hệ chúng tôi để được tư vấn chi tiết.
                  </p>
                  <div className="flex justify-center">
                    <a href="/lien-he" className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                      Liên hệ tư vấn
                    </a>
                  </div>
                </div>
              </div>
            ) : (
              <div className="categories-detail__body">
                <div className="bg-[#F9FAFB] rounded-2xl p-12 text-center border border-gray-100">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-[#1E1E1E] mb-3">Trang không tồn tại</h4>
                  <p className="text-gray-500 mb-6">
                    Trang bạn đang tìm kiếm không có trong hệ thống.
                  </p>
                  <div className="flex justify-center">
                    <a href="/" className="bg-[#1E1E1E] hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-semibold transition-colors duration-300">
                      Về trang chủ
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {!loading && category && (
          <div className="categories-detail__bottom pt-4 border-t">
            <Tag />
          </div>
        )}
      </div>
    </div>
  );
}

export default CategoriesDetail;
