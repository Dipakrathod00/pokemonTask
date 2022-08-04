import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetDataAction } from "../Action/pokemon_action";
import InfiniteScroll from "react-infinite-scroll-component";

export default function Home() {
  const { pokemonData } = useSelector((state) => state.myData);
  console.log(pokemonData.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetDataAction());
  }, []);

  const fetchMoreData = () => {
    dispatch(GetDataAction());
  };

  return (
    <div className="container">
      <div className="row">
        <InfiniteScroll
          dataLength={pokemonData.length}
          next={fetchMoreData}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          {pokemonData.data?.map((item) => (
            <div className="col-sm-12">
              <div className="card">
                <div className="card-body">
                  <img src={item.images.large} alt="" />
                  <div className="d-flex justify-content-between">
                    <h2>{item.name}</h2>
                    <h1>Hp :{item.hp}</h1>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </div>
  );
}
