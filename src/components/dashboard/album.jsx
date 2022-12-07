import React, { useEffect, useState } from "react";
import axios from "axios";
import { actionType } from "../../context/reducer";
import { useStateValue } from "../../context/stateProvider";
import { IoTrash } from "react-icons/io5";
import { motion } from "framer-motion";
import { storage } from "../../config/firebase";
import { deleteObject, ref } from "firebase/storage";
import { AlbumCard } from "./songs";

const Artist = () => {
  const [{ allAlbums }, dispatch] = useStateValue();

  const getAllAlbum = async () => {
    try {
      const res = await axios.get(`http://localhost:4000/album/getall`);
      console.log(res.data);
      dispatch({
        type: actionType.SET_ALL_ALBUMS,
        allAlbums: res.data.data,
      });
    } catch (error) {
      return null;
    }
  };
  useEffect(() => {
    getAllAlbum();
  }, []);
  return (
    <>
      <div className="w-full p-4 flex items-center justify-center flex-col">
        <div className="relative w-full  my-4 p-4 py-12 border border-gray-300 rounded-md">
          <AlbumContainer data={allAlbums} />
        </div>
      </div>
    </>
  );
};

export default Artist;

////
export const AlbumContainer = ({ data }) => {
  return (
    <div className=" w-full  flex flex-wrap gap-3  items-center justify-evenly">
      {data &&
        data.map((song, i) => (
          <AlbumCard key={song._id} data={song} index={i} type="album" />
        ))}
    </div>
  );
};
