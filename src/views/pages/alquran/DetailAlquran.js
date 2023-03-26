import axios from "axios";
import React, { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ApiSantri from "../../../api/ApiSantri";
import { bacaiqro } from "../../../gambar";
import { doGetAlquranSantriRequest } from "../../../reduxsaga/actions/Alquransantri";
import { doGetSantriByIdRequest } from "../../../reduxsaga/actions/Santri";
import config from "../../../reduxsaga/config/config";
import Alert from "../../../utils/Alert";
import Table, {
  ButtonLinkAlquranList,
  ButtonLinkIqro,
  ButtonLinkIqroList,
  SelectColumnFilter,
  tanggalcustom,
} from "../../components/datatable/Table";

const DetailAlquran = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { santridata } = useSelector((state) => state.santriState);
  const { alquransantridata } = useSelector(
    (state) => state.alquranSantriState
  );
  const { userProfile } = useSelector((state) => state.userState);

  const [alquran, setListAlquran] = useState([]);

  const [listsantris, setListsantris] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevState) => !prevState);
  };

  useEffect(() => {
    const fetchalquran = async () => {
      try {
        const data = await ApiSantri.getData(
          "/alquransantri/getlisthafalan/" + id
        );

        setListAlquran(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchalquran();

    const fetchdetailsantri = async () => {
      try {
        const data = await ApiSantri.getData("/santri/getbyid/" + id);

        setListsantris(data);
      } catch (error) {
        Alert.error("Periksa Jaringan anda !");
      }
    };
    fetchdetailsantri();
  }, [refresh]);

  const [Display, setDisplay] = useState([]);

  useEffect(() => {
    if (
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
        },
        {
          Header: "Juz",
          accessor: "juz",
        },
        {
          Header: "Hal",
          accessor: "halaman",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
        {
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkAlquranList
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else if (
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f883") ||
      (window.innerWidth <= 500 &&
        userProfile.role !== "8b273d68-fe09-422d-a660-af3d8312f884")
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Juz",
          accessor: "juz",
        },
        {
          Header: "Hal",
          accessor: "halaman",
        },
        {
          Header: "Ket",
          accessor: "ket",
        },
        {
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
      ]);
    } else if (
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f883" ||
      userProfile.role === "8b273d68-fe09-422d-a660-af3d8312f884"
    ) {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Juz",
          accessor: "juz",
        },
        {
          Header: "Ayat",
          accessor: "ayat",
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
          Header: "Detail",
          accessor: "id",
          Cell: (props) => (
            <ButtonLinkAlquranList
              value={props.value}
              onRefresh={handleRefresh}
            />
          ),
        },
      ]);
    } else {
      setDisplay([
        {
          Header: "Surah",
          accessor: "surah",
          Filter: SelectColumnFilter, // new
          filter: "includes",
        },
        {
          Header: "Ayat",
          accessor: "ayat",
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
          Header: "Selesai",
          accessor: "tgl_selesai",
          Cell: tanggalcustom,
        },
      ]);
    }
  }, []);

  // const data = React.useMemo(() => alquransantridata, [alquransantridata]);
  return (
    <div className="">
      <Toaster />
      {listsantris.map((e) => (
        <div className="mx-4 my-4 bg-gradient-to-r from-green-400 ro bg-mamasingle rounded-lg px-4 py-6 flex justify-between items-center shadow-lg hover:from-mamasingle hover:to-green-400">
          <h1 className="text-white font-semibold lg:text-2xl text-xl font-poppins">
            Data Hafalan Alquran {e.name}
          </h1>
          <img src={config.urlImage + "/" + e.photo} className="h-20" />
        </div>
      ))}
      <div className="mt-6 px-4">
        {alquran < 1 ? (
          <div className=" bg-white w-full rounded-md py-8 shadow-sm text-center">
            <h1 className=" text-sm font-poppins font-medium italic">
              Belum ada Hafalan
            </h1>
          </div>
        ) : (
          <Table
            columns={Display}
            data={alquran}
            url="/dataalquransantri/tambah"
          />
        )}
      </div>
    </div>
  );
};

export default DetailAlquran;
