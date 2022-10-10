import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { bacaiqro } from "../../../gambar";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import { doGetSurahPendekSantriRequest } from "../../../reduxsaga/actions/SurahPendekSantri";
import config from "../../../reduxsaga/config/config";
import Table, {
  ButtonLinkIqro,
  ButtonLinkIqroList,
  ButtonLinkSurahPendekList,
  SelectColumnFilter,
} from "../../components/datatable/Table";

const DetailSurahPendek = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { surahpendeksantridata } = useSelector(
    (state) => state.surahPendekSantriState
  );
  useEffect(() => {
    const payload = { id };
    dispatch(doGetSantriByIdRequest(payload));
    dispatch(doGetSurahPendekSantriRequest(payload));
  }, []);

  const columns = React.useMemo(
    () => [
      {
        Header: "Iqro",
        accessor: "name",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
      {
        Header: "Halaman",
        accessor: "halaman",
      },
      {
        Header: "Keterangan",
        accessor: "ket",
      },
      {
        Header: "Update",
        accessor: "updatedAt",
      },
      {
        Header: "Detail",
        accessor: "id",
        Cell: ButtonLinkSurahPendekList,
      },
    ],
    []
  );

  const data = React.useMemo(
    () => surahpendeksantridata,
    [surahpendeksantridata]
  );
  return (
    <div className=" overflow-hidden">
      {santridata.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold text-2xl font-poppins">
            Data Hafalan Surah Pendek {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        <Table
          columns={columns}
          data={data}
          url="/datasurahpendeksantri/tambah"
        />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default DetailSurahPendek;