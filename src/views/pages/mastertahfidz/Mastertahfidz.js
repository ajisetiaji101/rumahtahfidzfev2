import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rumahtahfidz } from "../../../gambar";
import Table, {
  ButtonLinkMasterRumahTahfidz,
  ButtonLinkRumahTahfidz,
  JumlahCabang,
  Jumlahorang,
} from "../../components/datatable/Table.js";
import {
  doGetRumahTahfidzRequest,
  doDeleteRumahTahfidzRequest,
  doGetRumahTahfidzByIdRequest,
  doGetByRumahTahfidzRequest,
} from "../../../reduxsaga/actions/RumahTahfidz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { doGetMasterPondokRequest } from "../../../reduxsaga/actions/Masterpondok";
import LoadingSpinnerLogin from "../../components/spinner/LoadingSpinnerLogin";
import config from "../../../reduxsaga/config/config";
import { Toaster } from "react-hot-toast";
import ApiSantri from "../../../api/ApiSantri";
import Alert from "../../../utils/Alert";

const Mastertahfidz = () => {
  const dispatch = useDispatch();

  const { rumahtahfidzdata } = useSelector((state) => state.rumahTahfidzState);
  const { isLoading, masterpondokdata } = useSelector(
    (state) => state.masterPondokState
  );
  const { userProfile } = useSelector((state) => state.userState);
  const [Loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  const [listmasterpondok, setListmasterpondok] = useState([]);

  useEffect(() => {
    const fetchlistmasterpondok = async () => {
      try {
        const data = await ApiSantri.getData("/masterpondok/getall");
        setLoading(false);
        setListmasterpondok(data);
      } catch (error) {
        Alert.error("Periksa Koneksi Jaringan");
      }
    };
    fetchlistmasterpondok();
  }, [refresh]);

  // const [databaru, setDatabaru] = useState([]);

  // useEffect(() => {
  //   setDatabaru(
  //     masterpondokdata.sort(function (a, b) {
  //       if (a.name < b.name) {
  //         return -1;
  //       }
  //       if (a.name > b.name) {
  //         return 1;
  //       }
  //       return 0;
  //     })
  //   );
  // }, [masterpondokdata]);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (window.innerWidth <= 500) {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkMasterRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Nama",
          accessor: "name",
        },
        {
          Header: "NIT",
          accessor: "nit",
        },
        {
          Header: "Kepala Tahfiz",
          accessor: "chief",
        },
        {
          Header: "Cabang",
          accessor: "total_pondok",
          Cell: JumlahCabang,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkMasterRumahTahfidz
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    }
  }, [listmasterpondok]);

  return (
    <div className="mx-4">
      {Loading ? <LoadingSpinnerLogin /> : ""}
      <Toaster />
      <div className="my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
        <h1 className="text-white font-semibold lg:text-2xl text-lg font-poppins">
          Data Master Tahfidz
        </h1>
        <img src={rumahtahfidz} className="h-20" />
      </div>
      <div className="mt-6">
        <Table columns={Display} data={listmasterpondok} url="tambah" />
      </div>
      <div className="z-30">
        <ToastContainer autoClose={2000} />
      </div>
    </div>
  );
};

export default Mastertahfidz;
