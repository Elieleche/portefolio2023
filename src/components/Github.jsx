/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 github.gltf --transform 
Files: github.gltf [41.99KB] > /home/zuhedev/Documents/portefolio/portefolio/public/github_octocat/github-transformed.glb [22.97KB] (45%)
Author: pissang (https://sketchfab.com/YiChen)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/github-octocat-c8a4795ce3fe4b21a4c40895cb9cb6a5
Title: GitHub Octocat
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Github(props) {
  const { nodes, materials } = useGLTF('/github-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0.004, 9.995, 0.636]} scale={0.05} />
    </group>
  )
}

useGLTF.preload('/github-transformed.glb')
