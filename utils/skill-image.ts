import adobeXd from '../src/app/assets/svg/skills/adobe-xd.svg';
import adobeaudition from '../src/app/assets/svg/skills/adobeaudition.svg';
import afterEffects from '../src/app/assets/svg/skills/after-effects.svg';
import angular from '../src/app/assets/svg/skills/angular.svg';
import aws from '../src/app/assets/svg/skills/aws.svg';
import azure from '../src/app/assets/svg/skills/azure.svg';
import blender from '../src/app/assets/svg/skills/blender.svg';
import bootstrap from '../src/app/assets/svg/skills/bootstrap.svg';
import bulma from '../src/app/assets/svg/skills/bulma.svg';
import c from '../src/app/assets/svg/skills/c.svg';
import canva from '../src/app/assets/svg/skills/canva.svg';
import capacitorjs from '../src/app/assets/svg/skills/capacitorjs.svg';
import coffeescript from '../src/app/assets/svg/skills/coffeescript.svg';
import cplusplus from '../src/app/assets/svg/skills/cplusplus.svg';
import csharp from '../src/app/assets/svg/skills/csharp.svg';
import css from '../src/app/assets/svg/skills/css.svg';
import dart from '../src/app/assets/svg/skills/dart.svg';
import deno from '../src/app/assets/svg/skills/deno.svg';
import django from '../src/app/assets/svg/skills/django.svg';
import docker from '../src/app/assets/svg/skills/docker.svg';
import fastify from '../src/app/assets/svg/skills/fastify.svg';
import figma from '../src/app/assets/svg/skills/figma.svg';
import firebase from '../src/app/assets/svg/skills/firebase.svg';
import flutter from '../src/app/assets/svg/skills/flutter.svg';
import gcp from '../src/app/assets/svg/skills/gcp.svg';
import gimp from '../src/app/assets/svg/skills/gimp.svg';
import git from '../src/app/assets/svg/skills/git.svg';
import go from '../src/app/assets/svg/skills/go.svg';
import graphql from '../src/app/assets/svg/skills/graphql.svg';
import haxe from '../src/app/assets/svg/skills/haxe.svg';
import html from '../src/app/assets/svg/skills/html.svg';
import illustrator from '../src/app/assets/svg/skills/illustrator.svg';
import ionic from '../src/app/assets/svg/skills/ionic.svg';
import java from '../src/app/assets/svg/skills/java.svg';
import javascript from '../src/app/assets/svg/skills/javascript.svg';
import julia from '../src/app/assets/svg/skills/julia.svg';
import kotlin from '../src/app/assets/svg/skills/kotlin.svg';
import lightroom from '../src/app/assets/svg/skills/lightroom.svg';
import markdown from '../src/app/assets/svg/skills/markdown.svg';
import materialui from '../src/app/assets/svg/skills/materialui.svg';
import matlab from '../src/app/assets/svg/skills/matlab.svg';
import memsql from '../src/app/assets/svg/skills/memsql.svg';
import microsoftoffice from '../src/app/assets/svg/skills/microsoftoffice.svg';
import mongoDB from '../src/app/assets/svg/skills/mongoDB.svg';
import mysql from '../src/app/assets/svg/skills/mysql.svg';
import nextJS from '../src/app/assets/svg/skills/nextJS.svg';
import nginx from '../src/app/assets/svg/skills/nginx.svg';
import numpy from '../src/app/assets/svg/skills/numpy.svg';
import nuxtJS from '../src/app/assets/svg/skills/nuxtJS.svg';
import opencv from '../src/app/assets/svg/skills/opencv.svg';
import photoshop from '../src/app/assets/svg/skills/photoshop.svg';
import php from '../src/app/assets/svg/skills/php.svg';
import picsart from '../src/app/assets/svg/skills/picsart.svg';
import postgresql from '../src/app/assets/svg/skills/postgresql.svg';
import premierepro from '../src/app/assets/svg/skills/premierepro.svg';
import prisma from '../src/app/assets/svg/skills/prisma.svg';
import python from '../src/app/assets/svg/skills/python.svg';
import pytorch from '../src/app/assets/svg/skills/pytorch.svg';
import react from '../src/app/assets/svg/skills/react.svg';
import ruby from '../src/app/assets/svg/skills/ruby.svg';
import selenium from '../src/app/assets/svg/skills/selenium.svg';
import sketch from '../src/app/assets/svg/skills/sketch.svg';
import strapi from '../src/app/assets/svg/skills/strapi.svg';
import svelte from '../src/app/assets/svg/skills/svelte.svg';
import swift from '../src/app/assets/svg/skills/swift.svg';
import tailwind from '../src/app/assets/svg/skills/tailwind.svg';
import tensorflow from '../src/app/assets/svg/skills/tensorflow.svg';
import typescript from '../src/app/assets/svg/skills/typescript.svg';
import unity from '../src/app/assets/svg/skills/unity.svg';
import vitejs from '../src/app/assets/svg/skills/vitejs.svg';
import vue from '../src/app/assets/svg/skills/vue.svg';
import vuetifyjs from '../src/app/assets/svg/skills/vuetifyjs.svg';
import webix from '../src/app/assets/svg/skills/webix.svg';
import wolframalpha from '../src/app/assets/svg/skills/wolframalpha.svg';
import wordpress from '../src/app/assets/svg/skills/wordpress.svg';
import pandas from '../src/app/assets/svg/skills/pandas.svg';
import scikitlearn from '../src/app/assets/svg/skills/scikit-learn.svg';
import dotnet from '../src/app/assets/svg/skills/dotnet.svg';
import dotnetcore from '../src/app/assets/svg/skills/dotnetcore.svg'
import kubernetes from '../src/app/assets/svg/skills/kubernetes.svg'
import linux from '../src/app/assets/svg/skills/linux.svg'
import sqlalchemy from '../src/app/assets/svg/skills/sqlalchemy.svg'
import fastapi from '../src/app/assets/svg/skills/fastapi.svg'



export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'prisma':
      return prisma;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    case 'pandas':
      return pandas;
    case 'sklearn':
      return scikitlearn;
    case '.net':
      return dotnet;
    case '.net core':
      return dotnetcore
    case 'kubernetes':
      return kubernetes;
    case 'linux':
      return linux;
    case 'sqlalchemy':
      return sqlalchemy;
    case 'fastapi':
      return fastapi;
    default:
      break;
  }
}
