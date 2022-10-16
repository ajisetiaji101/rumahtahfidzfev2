import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";
import { bacaiqro } from "../../../gambar";
import { doGetRumahTahfidzRequest } from "../../../reduxsaga/actions/RumahTahfidz";
import { doGetSantriRequest } from "../../../reduxsaga/actions/Santri";
import {
  doCreateIqroSantriRequest,
  doGetIqroSantriByIdRequest,
  doUpdateIqroSantriRequest,
} from "../../../reduxsaga/actions/Iqrosantri";
import {
  doGetSurahPendekSantriByIdRequest,
  doUpdateSurahPendekSantriRequest,
} from "../../../reduxsaga/actions/SurahPendekSantri";
import {
  doGetSurahPendekGuruByIdRequest,
  doUpdateSurahPendekGuruRequest,
} from "../../../reduxsaga/actions/SurahPendekGuru";
import moment from "moment";

const EditSurahPendekGuru = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [select, setSelect] = useState();
  console.log(select);

  const { surahpendekgurudata } = useSelector(
    (state) => state.surahPendekGuruState
  );

  useEffect(() => {
    const payload = { id };
    dispatch(doGetSurahPendekGuruByIdRequest(payload));
  }, []);

  const handleChange = (e) => {
    setSelect(e.target.value);
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string("Enter Job Title").required("Title is required"),
    // address: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // nis: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // telephone: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // chief: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
    // photo: Yup.string("Please enter Primary Skill").required(
    //   "Primary Skill is required"
    // ),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      namaguru: surahpendekgurudata.length
        ? surahpendekgurudata[0].Guru.name
        : null,
      name: surahpendekgurudata.length ? surahpendekgurudata[0].name : null,
      tgl_selesai: surahpendekgurudata.length
        ? moment(surahpendekgurudata[0].tgl_selesai).format("YYYY-MM-DD")
        : null,
      ket: surahpendekgurudata.length ? surahpendekgurudata[0].ket : null,
      guruId: surahpendekgurudata.length
        ? surahpendekgurudata[0].Guru.id
        : null,
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      const payload = {
        id,
        name: values.name,
        tgl_selesai: values.tgl_selesai,
        ket: values.ket,
      };

      dispatch(doUpdateSurahPendekGuruRequest(payload));

      toast.success("Data berhasil ditambahkan...");

      // setTimeout(() => {
      //   navigate("/datasurahpendekguru", { state: { refresh: true } });
      // }, 3000);
    },
  });

  const juzamma = [
    "An Naba’",
    "An Nazi’at",
    "Abasa'",
    "At Takwir",
    "Al Infithar",
    "Al Muthaffifin",
    "Al Insyiqaq",
    "Al Buruj",
    "Ath Thariq",
    "Al A’laa",
    "Al Ghasyiah",
    "Al Fajr",
    "Al Balad",
    "Asy Syams",
    "Al Lail",
    "Ad Dhuha",
    "Asy Syarh",
    "At Tin",
    "Al ‘Alaq",
    "Al Qadr",
    "Al Bayyinah",
    "Az Zalzalah",
    "Al ‘Aadiyah",
    "Al Qari’ah",
    "At Takatsur",
    "Al ‘Ashr",
    "Al Humazah",
    "Al Fiil",
    "Quraisy",
    "Al Ma’un",
    "Al Kautsar",
    "Al Kafirun",
    "An Nashr",
    "Al Lahab",
    "Al Ikhlash",
    "Al Falaq",
    "An Nas",
  ];

  const keterangan = ["mengulang", "belum lancar", "selesai"];

  return (
    <div className=" overflow-hidden">
      <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold text-2xl font-poppins">
          Hafalan Surah Pendek
        </h1>
        <img src={bacaiqro} className="h-20" />
      </div>
      <div className="m-4 bg-white p-4 rounded-md font-poppins text-xs">
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Nama</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            placeholder="Iqro Ke ..."
            name="namaguru"
            id="namaguru"
            value={formik.values.namaguru}
            disabled
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Surah Pendek</h1>
          <select
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="name"
            data-dropup-auto="false"
            class="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Surah Pendek
            </option>
            {juzamma.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Tanggal Selesai</h1>
          <input
            className="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
            type="date"
            name="tgl_selesai"
            id="tgl_selesai"
            value={formik.values.tgl_selesai}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="grid grid-cols-8 my-2">
          <h1 className="block col-span-2">Keterangan</h1>
          <select
            name="ket"
            id="ket"
            value={formik.values.ket}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            autoComplete="ket"
            class="border rounded-md block col-span-2 pl-2 py-1 placeholder:text-xs"
          >
            <option value="" selected disabled hidden>
              Pilih Keterangan
            </option>
            {keterangan.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <button
            className="py-1 px-2 bg-mamasingle rounded-md text-white shadow-sm"
            type="button"
            onClick={formik.handleSubmit}
          >
            SIMPAN
          </button>
          <button
            className="py-1 px-2 bg-red-400 rounded-md text-white shadow-sm ml-2"
            onClick={() => navigate("/datasurahpendekguru")}
          >
            CANCEL
          </button>
        </div>
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default EditSurahPendekGuru;
