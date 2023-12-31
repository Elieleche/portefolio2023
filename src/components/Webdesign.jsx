/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 webdesign.gltf --transform 
Files: webdesign.gltf [15.61KB] > /home/zuhedev/Documents/portefolio/portefolio/public/voxel_web_development/webdesign-transformed.glb [9.42KB] (40%)
Author: Diego G. (https://sketchfab.com/empty_mirror)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/voxel-web-development-50ad959d6c6b4799806c45bfa46ca550
Title: Voxel Web Development
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Webdesign3d(props) {
  const { nodes, materials } = useGLTF('/webdesign-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.palette} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_6.geometry} material={materials['palette.001']} rotation={[Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Object_8.geometry} material={materials['palette.002']} rotation={[Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/webdesign-transformed.glb')
