import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import TablePaginate from "../components/TablePaginate";
import { Button, Modal, Spinner, useDisclosure } from "@nextui-org/react";
import ModalAddBarang from "../components/nextui/ModalAddBarang";
import { supabase } from "../utils/SupaClient";

const TableBarang = () => {
  const [loading, setLoading] = useState(true);
  const [allBarang, setAllBarang] = useState([]);
  const [jenisBarang, setJenisBarang] = useState("semua");

  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const getallBarang = async () => {
    setLoading(true);
    try {
      const { data } = await supabase
        .from("barang")
        .select("*")
        .order("id", { ascending: false });

      setAllBarang(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (event) => {
    setJenisBarang(event.target.value);
  };

  useEffect(() => {
    getallBarang();
    document.getElementById("title").innerHTML = "Tabel Barang";
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Spinner className="m-auto" label="Tapi tunggu dulu" />
        </div>
      ) : (
        <section id="table-barang" className="p-4">
          <div className="flex flex-col md:flex-row justify-between mb-5">
            <h2 className="text-4xl font-bold">Tabel Barang</h2>
            <div className="flex-shrink-0 mt-4 md:mt-0">
              <Button onPress={onOpen} color="primary">
                Tambah Barang
              </Button>
            </div>
            <ModalAddBarang
              isOpen={isOpen}
              onOpen={onOpen}
              onOpenChange={onOpenChange}
            />
          </div>
          <div className="mb-4">
            <select
              onChange={handleFilterChange}
              value={jenisBarang}
              className="border border-gray-300 h-10 rounded w-full md:w-auto"
            >
              <option value="semua">Semua</option>
              <option value="makanan">Makanan</option>
              <option value="minuman">Minuman</option>
            </select>
          </div>
          <TablePaginate allBarang={allBarang} filterJenis={jenisBarang} />
        </section>
      )}
    </Layout>
  );
};

export default TableBarang;
