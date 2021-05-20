import { Injectable, NgZone, ElementRef } from '@angular/core';
import { WindowRefService } from '../../shared/services/window-ref.service';

import * as BABYLON from 'babylonjs';

import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class DevelopmentService {

    public isMini: boolean;

    private innerWidth: any;
    private innerHeight: any;

    private canvas: HTMLCanvasElement;
    private engine: BABYLON.Engine;
    private scene: BABYLON.Scene;

    private universal_camera: BABYLON.UniversalCamera;
    private anaglyph_universal_camera: BABYLON.AnaglyphUniversalCamera;

    private universalCameraPosition_clone;
    private universalCameraTargetPosition_clone;

    private hemispheric_light: BABYLON.Light;

    private boundary_bottom; boundary_front; boundary_left; boundary_back; boundary_right; boundary_top;
    private desk; reflection_desk;
    private threed_glasses_frame; threed_glass_blue; threed_glass_red;
    private server_glass;
    private arrow_top; arrow_bottom;
    private via_air_mail;

    private icon_postgresql;
    private icon_mysql_yellow; icon_mysql_blue;
    private icon_hibernate_blue; icon_hibernate_brown; icon_hibernate_white;
    private icon_java;
    private icon_jsp;
    private icon_thymeleaf_green; icon_thymeleaf_grey; icon_thymeleaf_white;
    private icon_springboot_white; icon_springboot_green;
    private icon_spring_framework;
    private icon_maven; icon_maven_left; icon_maven_right;
    private icon_ubuntu_orange; icon_ubuntu_white;
    private icon_tomcat_black; icon_tomcat_dark_yellow; icon_tomcat_light_yellow;
    private icon_nginx;
    private icon_python_blue; icon_python_yellow;
    private icon_css;
    private icon_html;
    private icon_bootstrap;
    private icon_angular;
    private icon_typescript;
    private icon_postman;
    private icon_docker;
    private icon_git;
    private icon_3Ds_1; icon_3Ds_2; icon_3Ds_3; icon_3Ds_4; icon_3Ds_5;
    private icon_blender;
    private icon_babylon;
    private icon_threejs;
    private icon_photoshop;
    private icon_illustrator;
    private icon_opengl;

    private icon_git_BAKING: BABYLON.Texture;
    private icon_git_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_docker_BAKING: BABYLON.Texture;
    private icon_docker_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_postman_BAKING: BABYLON.Texture;
    private icon_postman_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_postgresql_BAKING: BABYLON.Texture;
    private icon_postgresql_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_mysql_yellow_BAKING: BABYLON.Texture;
    private icon_mysql_yellow_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_mysql_blue_BAKING: BABYLON.Texture;
    private icon_mysql_blue_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_jsp_BAKING: BABYLON.Texture;
    private icon_jsp_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_thymeleaf_green_BAKING: BABYLON.Texture;
    private icon_thymeleaf_green_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_thymeleaf_grey_BAKING: BABYLON.Texture;
    private icon_thymeleaf_grey_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_thymeleaf_white_BAKING: BABYLON.Texture;
    private icon_thymeleaf_white_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_springboot_white_BAKING: BABYLON.Texture;
    private icon_springboot_white_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_springboot_green_BAKING: BABYLON.Texture;
    private icon_springboot_green_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_spring_framework_BAKING: BABYLON.Texture;
    private icon_spring_framework_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_maven_BAKING: BABYLON.Texture;
    private icon_maven_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_maven_left_BAKING: BABYLON.Texture;
    private icon_maven_left_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_maven_right_BAKING: BABYLON.Texture;
    private icon_maven_right_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_tomcat_black_BAKING: BABYLON.Texture;
    private icon_tomcat_black_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_tomcat_dark_yellow_BAKING: BABYLON.Texture;
    private icon_tomcat_dark_yellow_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_tomcat_light_yellow_BAKING: BABYLON.Texture;
    private icon_tomcat_light_yellow_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_nginx_BAKING: BABYLON.Texture;
    private icon_nginx_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_java_BAKING: BABYLON.Texture;
    private icon_java_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_html_BAKING: BABYLON.Texture;
    private icon_html_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_python_blue_BAKING: BABYLON.Texture;
    private icon_python_blue_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_python_yellow_BAKING: BABYLON.Texture;
    private icon_python_yellow_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_css_BAKING: BABYLON.Texture;
    private icon_css_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_angular_BAKING: BABYLON.Texture;
    private icon_angular_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_bootstrap_BAKING: BABYLON.Texture;
    private icon_bootstrap_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_typescript_BAKING: BABYLON.Texture;
    private icon_typescript_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_blender_BAKING: BABYLON.Texture;
    private icon_blender_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_babylon_BAKING: BABYLON.Texture;
    private icon_babylon_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_photoshop_BAKING: BABYLON.Texture;
    private icon_photoshop_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_illustrator_BAKING: BABYLON.Texture;
    private icon_illustrator_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_ubuntu_orange_BAKING: BABYLON.Texture;
    private icon_ubuntu_orange_BAKING_HIGHLIGHT: BABYLON.Texture;
    private icon_ubuntu_white_BAKING: BABYLON.Texture;
    private icon_ubuntu_white_BAKING_HIGHLIGHT: BABYLON.Texture;
    private via_air_mail_BAKING: BABYLON.Texture;
    private via_air_mail_BAKING_HIGHLIGHT: BABYLON.Texture;
    private threed_glasses_frame_BAKING: BABYLON.Texture;
    private threed_glasses_frame_BAKING_HIGHLIGHT: BABYLON.Texture;

    private glass_MATERIAL: BABYLON.StandardMaterial;
    private reflectionDesk_MATERIAL: BABYLON.StandardMaterial;
    private glass_blue_MATERIAL: BABYLON.StandardMaterial;
    private glass_red_MATERIAL: BABYLON.StandardMaterial;
    private arrows_MATERIAL: BABYLON.StandardMaterial;

    private scene_loaded = false;
    private introduction_closed = false;

    private isActive_cameraAnaglyph = false;

    public constructor(
        private ngZone: NgZone,
        private windowRef: WindowRefService,
        protected readonly interaction: InteractionService
    ) {}

    public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    // CANVAS / ENGINE / SCENE

    this.canvas = canvas.nativeElement;

    this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });

    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = BABYLON.Color4.FromHexString('#181837FF');

    // CANERAS

    this.universal_camera = new BABYLON.UniversalCamera("universal_camera", new BABYLON.Vector3(0, 0, 0), this.scene);
    this.universal_camera.position = this.get_initPositionCamera();
    this.universal_camera.target = this.get_initPositionCameraTarget();
    this.universal_camera.touchAngularSensibility = 10000;
    this.universal_camera.speed = 0.7;
    this.universal_camera.invertRotation = false;
    this.universal_camera.ellipsoid = new BABYLON.Vector3(2, 2, 2);
    this.universal_camera.inputs.addMouseWheel();
    this.universal_camera.attachControl(canvas, true);

    this.anaglyph_universal_camera = new BABYLON.AnaglyphUniversalCamera("anaglyph_universal_camera", new BABYLON.Vector3(0, 0, 0), 0.05, this.scene);
    this.anaglyph_universal_camera.target = new BABYLON.Vector3(-4, 10, 5);
    this.anaglyph_universal_camera.touchAngularSensibility = 10000;
    this.anaglyph_universal_camera.speed = 0.9;
    this.anaglyph_universal_camera.invertRotation = false;
    this.anaglyph_universal_camera.ellipsoid = new BABYLON.Vector3(2, 2, 2);
    this.anaglyph_universal_camera.inputs.addMouseWheel();
    this.anaglyph_universal_camera.attachControl(canvas, true);

    // LIGHTS

    this.hemispheric_light = new BABYLON.HemisphericLight('hemispheric_light', new BABYLON.Vector3(0, 1, 0), this.scene);
    this.hemispheric_light.intensity = 0.8;

    // COLLISIONS

    this.scene.collisionsEnabled = true;
    this.universal_camera.checkCollisions = true;
    this.anaglyph_universal_camera.checkCollisions = true;

    this.boundary_bottom = BABYLON.Mesh.CreatePlane("boundary_bottom", 200, this.scene);
    this.boundary_bottom.position = new BABYLON.Vector3(-16.2, 0, -10);
    this.boundary_bottom.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
    this.boundary_bottom.isVisible = false;

    this.boundary_front = BABYLON.Mesh.CreatePlane("boundary_front", 200, this.scene);
    this.boundary_front.position = new BABYLON.Vector3(-16.2, 50, 60);
    this.boundary_front.isVisible = false;

    this.boundary_left = BABYLON.Mesh.CreatePlane("boundary_left", 200, this.scene);
    this.boundary_left.position = new BABYLON.Vector3(50, 50, 0);
    this.boundary_left.rotation = new BABYLON.Vector3(0, Math.PI/2, 0);
    this.boundary_left.isVisible = false;

    this.boundary_back = BABYLON.Mesh.CreatePlane("boundary_back", 200, this.scene);
    this.boundary_back.position = new BABYLON.Vector3(-16.2, 50, -50);
    this.boundary_back.rotation = new BABYLON.Vector3(0, Math.PI, 0);
    this.boundary_back.isVisible = false;

    this.boundary_right = BABYLON.Mesh.CreatePlane("boundary_right", 200, this.scene);
    this.boundary_right.position = new BABYLON.Vector3(-90, 50, 0);
    this.boundary_right.rotation = new BABYLON.Vector3(0, -Math.PI/2, 0);
    this.boundary_right.isVisible = false;

    this.boundary_top = BABYLON.Mesh.CreatePlane("boundary_top", 200, this.scene);
    this.boundary_top.position = new BABYLON.Vector3(-16.2, 60, 0);
    this.boundary_top.rotation = new BABYLON.Vector3(-Math.PI/2, 0, 0);
    this.boundary_top.isVisible = false;

    this.boundary_bottom.checkCollisions = true;
    this.boundary_front.checkCollisions = true;
    this.boundary_left.checkCollisions = true;
    this.boundary_back.checkCollisions = true;
    this.boundary_right.checkCollisions = true;
    this.boundary_top.checkCollisions = true;

    // PLANS

    BABYLON.SceneLoader.ImportMeshAsync("plan_inside", "../../assets/glb/development/", "plan_inside.glb").then((result) => {
    });

    // PERSIAN CARPET

    BABYLON.SceneLoader.ImportMeshAsync("persian_carpet", "../../assets/glb/development/", "persian_carpet.glb").then((result) => {
    });

    // TRESTLES

    BABYLON.SceneLoader.ImportMeshAsync("trestle_left", "../../assets/glb/development/", "trestle_left.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("trestle_right", "../../assets/glb/development/", "trestle_right.glb").then((result) => {
    });

    // DESK

    this.reflection_desk = BABYLON.MeshBuilder.CreatePlane("mirror", {width: 7.2, height: 16.22}, this.scene);
    this.reflection_desk.position = new BABYLON.Vector3(-9, 5.35, -2.8);
    this.reflection_desk.rotation = new BABYLON.Vector3(Math.PI/2, 1.57, 0);
    this.reflection_desk.computeWorldMatrix(true);
    var reflectionDesk_worldMatrix = this.reflection_desk.getWorldMatrix();
    var reflectionDesk_vertexData = this.reflection_desk.getVerticesData("normal");
    var reflectionDesk_Normal = new BABYLON.Vector3(reflectionDesk_vertexData[0], reflectionDesk_vertexData[1], reflectionDesk_vertexData[2]);
    reflectionDesk_Normal = BABYLON.Vector3.TransformNormal(reflectionDesk_Normal, reflectionDesk_worldMatrix);
    var reflectionDesk_reflector = BABYLON.Plane.FromPositionAndNormal(this.reflection_desk.position, reflectionDesk_Normal.scale(-1));
    this.reflectionDesk_MATERIAL = new BABYLON.StandardMaterial("reflectionDesk_MATERIAL", this.scene);
    this.reflectionDesk_MATERIAL.alpha = 0.3;
    this.reflectionDesk_MATERIAL.diffuseColor = new BABYLON.Color3(0.10, 0.10, 0.10);
    this.reflection_desk.material = this.reflectionDesk_MATERIAL;
    var reflectionDesk_Texture = new BABYLON.MirrorTexture("reflectionDesk_Texture", 1024, this.scene);
    reflectionDesk_Texture.level = 1;
    reflectionDesk_Texture.mirrorPlane = reflectionDesk_reflector;
    reflectionDesk_Texture.renderList = this.scene.meshes;
    this.reflection_desk.material.reflectionTexture = reflectionDesk_Texture;

    this.glass_MATERIAL = new BABYLON.StandardMaterial("desk_MATERIAL", this.scene);
    this.glass_MATERIAL.diffuseColor = new BABYLON.Color3(0, 0, 0);
    this.glass_MATERIAL.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    this.glass_MATERIAL.alpha = 0.2;
    this.glass_MATERIAL.specularPower = 32;
    this.glass_MATERIAL.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_MATERIAL.reflectionFresnelParameters.bias = 0.1;
    this.glass_MATERIAL.emissiveFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_MATERIAL.emissiveFresnelParameters.bias = 0.6;
    this.glass_MATERIAL.emissiveFresnelParameters.power = 4;
    this.glass_MATERIAL.emissiveFresnelParameters.leftColor = BABYLON.Color3.Gray();
    this.glass_MATERIAL.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();
    this.glass_MATERIAL.opacityFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_MATERIAL.opacityFresnelParameters.leftColor = BABYLON.Color3.Gray();
    this.glass_MATERIAL.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();

    BABYLON.SceneLoader.ImportMeshAsync("desk", "../../assets/glb/development/", "desk.glb", this.scene).then((result) => {
      this.desk = this.scene.getMeshByName("desk");
      this.desk.material = this.glass_MATERIAL;
    });

    // RINCE COCHON

    BABYLON.SceneLoader.ImportMeshAsync("rince_cochon", "../../assets/glb/development/", "rince_cochon.glb").then((result) => {
    });

    // POST-IT

    BABYLON.SceneLoader.ImportMeshAsync("post_it", "../../assets/glb/development/", "post_it.glb").then((result) => {
    });

    // VIA AIR MAIL

    this.via_air_mail_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/via_air_mail_BAKING.jpg", this.scene, false, false);
    this.via_air_mail_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/via_air_mail_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    BABYLON.SceneLoader.ImportMeshAsync("via_air_mail", "../../assets/glb/development/", "via_air_mail.glb").then((result) => {
      this.via_air_mail = this.scene.getMeshByName("via_air_mail");
    });

    // NOTEBOOKS

    BABYLON.SceneLoader.ImportMeshAsync("notebook_bottom", "../../assets/glb/development/", "notebook_bottom.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("notebook_top", "../../assets/glb/development/", "notebook_top.glb").then((result) => {
    });

    // 3D GLASSES

    this.threed_glasses_frame_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/threed_glasses_frame_BAKING.jpg", this.scene, false, false);
    this.threed_glasses_frame_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/threed_glasses_frame_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    BABYLON.SceneLoader.ImportMeshAsync("threed_glasses_frame", "../../assets/glb/development/", "threed_glasses_frame.glb", this.scene).then((result) => {
      this.threed_glasses_frame = this.scene.getMeshByName("threed_glasses_frame");
    });

    this.glass_blue_MATERIAL = new BABYLON.StandardMaterial("glass", this.scene);
    this.glass_blue_MATERIAL.diffuseColor = new BABYLON.Color3(0, 0, 1);
    this.glass_blue_MATERIAL.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    this.glass_blue_MATERIAL.alpha = 0.2;
    this.glass_blue_MATERIAL.specularPower = 16;
    this.glass_blue_MATERIAL.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_blue_MATERIAL.reflectionFresnelParameters.bias = 0.1;
    this.glass_blue_MATERIAL.emissiveFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_blue_MATERIAL.emissiveFresnelParameters.bias = 0.6;
    this.glass_blue_MATERIAL.emissiveFresnelParameters.power = 4;
    this.glass_blue_MATERIAL.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
    this.glass_blue_MATERIAL.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();
    this.glass_blue_MATERIAL.opacityFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_blue_MATERIAL.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
    this.glass_blue_MATERIAL.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();

    BABYLON.SceneLoader.ImportMeshAsync("threed_glass_blue", "../../assets/glb/development/", "threed_glass_blue.glb", this.scene).then((result) => {
      this.threed_glass_blue = this.scene.getMeshByName("threed_glass_blue");
      this.threed_glass_blue.material = this.glass_blue_MATERIAL;
    });

    this.glass_red_MATERIAL = new BABYLON.StandardMaterial("glass", this.scene);
    this.glass_red_MATERIAL.diffuseColor = new BABYLON.Color3(1, 0, 0);
    this.glass_red_MATERIAL.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    this.glass_red_MATERIAL.alpha = 0.2;
    this.glass_red_MATERIAL.specularPower = 16;
    this.glass_red_MATERIAL.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_red_MATERIAL.reflectionFresnelParameters.bias = 0.1;
    this.glass_red_MATERIAL.emissiveFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_red_MATERIAL.emissiveFresnelParameters.bias = 0.6;
    this.glass_red_MATERIAL.emissiveFresnelParameters.power = 4;
    this.glass_red_MATERIAL.emissiveFresnelParameters.leftColor = BABYLON.Color3.White();
    this.glass_red_MATERIAL.emissiveFresnelParameters.rightColor = BABYLON.Color3.Black();
    this.glass_red_MATERIAL.opacityFresnelParameters = new BABYLON.FresnelParameters();
    this.glass_red_MATERIAL.opacityFresnelParameters.leftColor = BABYLON.Color3.White();
    this.glass_red_MATERIAL.opacityFresnelParameters.rightColor = BABYLON.Color3.Black();

    BABYLON.SceneLoader.ImportMeshAsync("threed_glass_red", "../../assets/glb/development/", "threed_glass_red.glb", this.scene).then((result) => {
      this.threed_glass_red = this.scene.getMeshByName("threed_glass_red");
      this.threed_glass_red.material = this.glass_red_MATERIAL;
    });

    // SPUPPORT LAPTOP

    BABYLON.SceneLoader.ImportMeshAsync("support_laptop", "../../assets/glb/development/", "support_laptop.glb").then((result) => {
    });

    // BOXES

    BABYLON.SceneLoader.ImportMeshAsync("wood_box_center", "../../assets/glb/development/", "wood_box_center.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("wood_box_right", "../../assets/glb/development/", "wood_box_right.glb").then((result) => {
    });

    // COMPUTERS

    BABYLON.SceneLoader.ImportMeshAsync("keyboard", "../../assets/glb/development/", "keyboard.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("keyboard_keyboard", "../../assets/glb/development/", "keyboard_keyboard.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("mouse", "../../assets/glb/development/", "mouse.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("mac_mini", "../../assets/glb/development/", "mac_mini.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("laptop", "../../assets/glb/development/", "laptop.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("laptop_keyboard", "../../assets/glb/development/", "laptop_keyboard.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("laptop_screen", "../../assets/glb/development/", "laptop_screen.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("screen_frame_center", "../../assets/glb/development/", "screen_frame_center.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("screen_center", "../../assets/glb/development/", "screen_center.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("screen_frame_right", "../../assets/glb/development/", "screen_frame_right.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("screen_right", "../../assets/glb/development/", "screen_right.glb").then((result) => {
    });

    // ICONS

    this.icon_postgresql_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_postgresql_BAKING.jpg", this.scene, false, false);
    this.icon_postgresql_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_postgresql_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_mysql_yellow_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_mysql_yellow_BAKING.jpg", this.scene, false, false);
    //this.icon_mysql_yellow_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_mysql_yellow_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_mysql_blue_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_mysql_blue_BAKING.jpg", this.scene, false, false);
    //this.icon_mysql_blue_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_mysql_blue_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_maven_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_left_BAKING.jpg", this.scene, false, false);
    //this.icon_maven_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_left_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_maven_left_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_left_BAKING.jpg", this.scene, false, false);
    //this.icon_maven_left_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_left_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_maven_right_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_right_BAKING.jpg", this.scene, false, false);
    //this.icon_maven_right_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_maven_right_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_java_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_java_BAKING.jpg", this.scene, false, false);
    this.icon_java_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_java_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_thymeleaf_green_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_green_BAKING.jpg", this.scene, false, false);
    //this.icon_thymeleaf_green_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_green_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_thymeleaf_grey_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_grey_BAKING.jpg", this.scene, false, false);
    //this.icon_thymeleaf_grey_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_grey_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_thymeleaf_white_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_white_BAKING.jpg", this.scene, false, false);
    //this.icon_thymeleaf_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_thymeleaf_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_jsp_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_jsp_BAKING.jpg", this.scene, false, false);
    this.icon_jsp_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_jsp_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_springboot_white_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_springboot_white_BAKING.jpg", this.scene, false, false);
    //this.icon_springboot_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_springboot_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_springboot_white_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_spring_framework_BAKING.jpg", this.scene, false, false);
    //this.icon_spring_framework_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_spring_framework_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_spring_framework_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_spring_framework_BAKING.jpg", this.scene, false, false);
    this.icon_spring_framework_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_spring_framework_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_ubuntu_orange_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_ubuntu_orange_BAKING.jpg", this.scene, false, false);
    this.icon_ubuntu_orange_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_ubuntu_orange_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_tomcat_black_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_black_BAKING.jpg", this.scene, false, false);
    //this.icon_tomcat_black_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_black_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_tomcat_dark_yellow_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_dark_yellow_BAKING.jpg", this.scene, false, false);
    //this.icon_tomcat_dark_yellow_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_dark_yellow_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_tomcat_light_yellow_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_light_yellow_BAKING.jpg", this.scene, false, false);
    //this.icon_tomcat_light_yellow_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_tomcat_light_yellow_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    //this.icon_nginx_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_nginx_BAKING.jpg", this.scene, false, false);
    //this.icon_nginx_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_nginx_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_ubuntu_white_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_ubuntu_white_BAKING.jpg", this.scene, false, false);
    this.icon_ubuntu_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_ubuntu_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_python_blue_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_python_blue_BAKING.jpg", this.scene, false, false);
    this.icon_python_blue_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_python_blue_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_python_yellow_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_python_yellow_BAKING.jpg", this.scene, false, false);
    this.icon_python_yellow_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_python_yellow_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_css_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_css_BAKING.jpg", this.scene, false, false);
    this.icon_css_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_css_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_html_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_html_BAKING.jpg", this.scene, false, false);
    this.icon_html_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_html_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_bootstrap_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_bootstrap_BAKING.jpg", this.scene, false, false);
    this.icon_bootstrap_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_bootstrap_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_angular_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_angular_BAKING.jpg", this.scene, false, false);
    this.icon_angular_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_angular_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_typescript_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_typescript_BAKING.jpg", this.scene, false, false);
    this.icon_typescript_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_typescript_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_postman_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_postman_BAKING.jpg", this.scene, false, false);
    this.icon_postman_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_postman_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_docker_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_docker_BAKING.jpg", this.scene, false, false);
    this.icon_docker_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_docker_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_git_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_git_BAKING.jpg", this.scene, false, false);
    this.icon_git_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_git_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_blender_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_blender_BAKING.jpg", this.scene, false, false);
    this.icon_blender_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_blender_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_babylon_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_babylon_BAKING.jpg", this.scene, false, false);
    this.icon_babylon_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_babylon_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_photoshop_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_photoshop_BAKING.jpg", this.scene, false, false);
    this.icon_photoshop_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_photoshop_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.icon_illustrator_BAKING = new BABYLON.Texture("../../assets/glb/development/baking/icon_illustrator_BAKING.jpg", this.scene, false, false);
    this.icon_illustrator_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/development/baking/icon_illustrator_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    BABYLON.SceneLoader.ImportMeshAsync("icon_postgresql", "../../assets/glb/development/", "icon_postgresql.glb").then((result) => {
        this.icon_postgresql = this.scene.getMeshByName("icon_postgresql");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_mysql_yellow", "../../assets/glb/development/", "icon_mysql_yellow.glb").then((result) => {
        this.icon_mysql_yellow = this.scene.getMeshByName("icon_mysql_yellow");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_hibernate_blue", "../../assets/glb/development/", "icon_hibernate_blue.glb").then((result) => {
        this.icon_hibernate_blue = this.scene.getMeshByName("icon_hibernate_blue");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_hibernate_brown", "../../assets/glb/development/", "icon_hibernate_brown.glb").then((result) => {
        this.icon_hibernate_brown = this.scene.getMeshByName("icon_hibernate_brown");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_hibernate_white", "../../assets/glb/development/", "icon_hibernate_white.glb").then((result) => {
        this.icon_hibernate_white = this.scene.getMeshByName("icon_hibernate_white");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_mysql_blue", "../../assets/glb/development/", "icon_mysql_blue.glb").then((result) => {
        this.icon_mysql_blue = this.scene.getMeshByName("icon_mysql_blue");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_maven", "../../assets/glb/development/", "icon_maven.glb").then((result) => {
      this.icon_maven = this.scene.getMeshByName("icon_maven");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_maven_left", "../../assets/glb/development/", "icon_maven_left.glb").then((result) => {
      this.icon_maven_left = this.scene.getMeshByName("icon_maven_left");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_maven_right", "../../assets/glb/development/", "icon_maven_right.glb").then((result) => {
      this.icon_maven_right = this.scene.getMeshByName("icon_maven_right");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_java", "../../assets/glb/development/", "icon_java.glb").then((result) => {
      this.icon_java = this.scene.getMeshByName("icon_java");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_jsp", "../../assets/glb/development/", "icon_jsp.glb").then((result) => {
      this.icon_jsp = this.scene.getMeshByName("icon_jsp");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_thymeleaf_green", "../../assets/glb/development/", "icon_thymeleaf_green.glb").then((result) => {
      this.icon_thymeleaf_green = this.scene.getMeshByName("icon_thymeleaf_green");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_thymeleaf_grey", "../../assets/glb/development/", "icon_thymeleaf_grey.glb").then((result) => {
      this.icon_thymeleaf_grey = this.scene.getMeshByName("icon_thymeleaf_grey");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_thymeleaf_white", "../../assets/glb/development/", "icon_thymeleaf_white.glb").then((result) => {
      this.icon_thymeleaf_white = this.scene.getMeshByName("icon_thymeleaf_white");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_springboot_green", "../../assets/glb/development/", "icon_springboot_green.glb").then((result) => {
      this.icon_springboot_green = this.scene.getMeshByName("icon_springboot_green");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_springboot_white", "../../assets/glb/development/", "icon_springboot_white.glb").then((result) => {
      this.icon_springboot_white = this.scene.getMeshByName("icon_springboot_white");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_spring_framework", "../../assets/glb/development/", "icon_spring_framework.glb").then((result) => {
      this.icon_spring_framework = this.scene.getMeshByName("icon_spring_framework");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_ubuntu_orange", "../../assets/glb/development/", "icon_ubuntu_orange.glb").then((result) => {
      this.icon_ubuntu_orange = this.scene.getMeshByName("icon_ubuntu_orange");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_ubuntu_white", "../../assets/glb/development/", "icon_ubuntu_white.glb").then((result) => {
      this.icon_ubuntu_white = this.scene.getMeshByName("icon_ubuntu_white");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_tomcat_black", "../../assets/glb/development/", "icon_tomcat_black.glb").then((result) => {
      this.icon_tomcat_black = this.scene.getMeshByName("icon_tomcat_black");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_tomcat_dark_yellow", "../../assets/glb/development/", "icon_tomcat_dark_yellow.glb").then((result) => {
      this.icon_tomcat_dark_yellow = this.scene.getMeshByName("icon_tomcat_dark_yellow");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_tomcat_light_yellow", "../../assets/glb/development/", "icon_tomcat_light_yellow.glb").then((result) => {
      this.icon_tomcat_light_yellow = this.scene.getMeshByName("icon_tomcat_light_yellow");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_nginx", "../../assets/glb/development/", "icon_nginx.glb").then((result) => {
      this.icon_nginx = this.scene.getMeshByName("icon_nginx");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_css", "../../assets/glb/development/", "icon_css.glb").then((result) => {
      this.icon_css = this.scene.getMeshByName("icon_css");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_html", "../../assets/glb/development/", "icon_html.glb").then((result) => {
      this.icon_html = this.scene.getMeshByName("icon_html");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_python_blue", "../../assets/glb/development/", "icon_python_blue.glb").then((result) => {
      this.icon_python_blue = this.scene.getMeshByName("icon_python_blue");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_python_yellow", "../../assets/glb/development/", "icon_python_yellow.glb").then((result) => {
      this.icon_python_yellow = this.scene.getMeshByName("icon_python_yellow");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_bootstrap", "../../assets/glb/development/", "icon_bootstrap.glb").then((result) => {
      this.icon_bootstrap = this.scene.getMeshByName("icon_bootstrap");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_angular", "../../assets/glb/development/", "icon_angular.glb").then((result) => {
      this.icon_angular = this.scene.getMeshByName("icon_angular");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_typescript", "../../assets/glb/development/", "icon_typescript.glb").then((result) => {
      this.icon_typescript = this.scene.getMeshByName("icon_typescript");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_postman", "../../assets/glb/development/", "icon_postman.glb").then((result) => {
      this.icon_postman = this.scene.getMeshByName("icon_postman");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_docker", "../../assets/glb/development/", "icon_docker.glb").then((result) => {
      this.icon_docker = this.scene.getMeshByName("icon_docker");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_git", "../../assets/glb/development/", "icon_git.glb").then((result) => {
      this.icon_git = this.scene.getMeshByName("icon_git");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_blender", "../../assets/glb/development/", "icon_blender.glb").then((result) => {
      this.icon_blender = this.scene.getMeshByName("icon_blender");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_3Ds_1", "../../assets/glb/development/", "icon_3Ds_1.glb").then((result) => {
      this.icon_3Ds_1 = this.scene.getMeshByName("icon_3Ds_1");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_3Ds_2", "../../assets/glb/development/", "icon_3Ds_2.glb").then((result) => {
      this.icon_3Ds_2 = this.scene.getMeshByName("icon_3Ds_2");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_3Ds_3", "../../assets/glb/development/", "icon_3Ds_3.glb").then((result) => {
      this.icon_3Ds_3 = this.scene.getMeshByName("icon_3Ds_3");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_3Ds_4", "../../assets/glb/development/", "icon_3Ds_4.glb").then((result) => {
      this.icon_3Ds_4 = this.scene.getMeshByName("icon_3Ds_4");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_3Ds_5", "../../assets/glb/development/", "icon_3Ds_5.glb").then((result) => {
      this.icon_3Ds_5 = this.scene.getMeshByName("icon_3Ds_5");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_babylon", "../../assets/glb/development/", "icon_babylon.glb").then((result) => {
      this.icon_babylon = this.scene.getMeshByName("icon_babylon");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_threejs", "../../assets/glb/development/", "icon_threejs.glb").then((result) => {
      this.icon_threejs = this.scene.getMeshByName("icon_threejs");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_photoshop", "../../assets/glb/development/", "icon_photoshop.glb").then((result) => {
      this.icon_photoshop = this.scene.getMeshByName("icon_photoshop");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_illustrator", "../../assets/glb/development/", "icon_illustrator.glb").then((result) => {
      this.icon_illustrator = this.scene.getMeshByName("icon_illustrator");
    });

    BABYLON.SceneLoader.ImportMeshAsync("icon_opengl", "../../assets/glb/development/", "icon_opengl.glb").then((result) => {
      this.icon_opengl = this.scene.getMeshByName("icon_opengl");
    });

    // OWL

    BABYLON.SceneLoader.ImportMeshAsync("owl", "../../assets/glb/development/", "owl.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("owl_wireframe", "../../assets/glb/development/", "owl_wireframe.glb").then((result) => {
    });

    // IPAD

    BABYLON.SceneLoader.ImportMeshAsync("ipad", "../../assets/glb/development/", "ipad.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("ipad_screen", "../../assets/glb/development/", "ipad_screen.glb").then((result) => {
    });

    // IPAD

    BABYLON.SceneLoader.ImportMeshAsync("celle_tower", "../../assets/glb/development/", "celle_tower.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("antennas", "../../assets/glb/development/", "antennas.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("antenna_box", "../../assets/glb/development/", "antenna_box.glb").then((result) => {
    });

    // CABLE

    BABYLON.SceneLoader.ImportMeshAsync("cable", "../../assets/glb/development/", "cable.glb").then((result) => {
    });

    // SERVER

    BABYLON.SceneLoader.ImportMeshAsync("servers", "../../assets/glb/development/", "servers.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("server_box", "../../assets/glb/development/", "server_box.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("server_flagstone", "../../assets/glb/development/", "server_flagstone.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("server_glass", "../../assets/glb/development/", "server_glass.glb").then((result) => {
      this.server_glass = this.scene.getMeshByName("server_glass");
      this.server_glass.material = this.glass_MATERIAL;
    });

    // DATABASE

    BABYLON.SceneLoader.ImportMeshAsync("database", "../../assets/glb/development/", "database.glb").then((result) => {
    });

    // ARROWS

    this.arrows_MATERIAL = new BABYLON.StandardMaterial("arrows", this.scene);
    this.arrows_MATERIAL.diffuseColor = new BABYLON.Color3(0, 1, 0);
    this.arrows_MATERIAL.emissiveColor = new BABYLON.Color3(0.5, 0.5, 0.5);
    this.arrows_MATERIAL.alpha = 0.3;
    this.arrows_MATERIAL.specularPower = 16;
    this.arrows_MATERIAL.reflectionFresnelParameters = new BABYLON.FresnelParameters();
    this.arrows_MATERIAL.reflectionFresnelParameters.bias = 0.1;
    this.arrows_MATERIAL.emissiveFresnelParameters = new BABYLON.FresnelParameters();
    this.arrows_MATERIAL.emissiveFresnelParameters.bias = 0.6;
    this.arrows_MATERIAL.emissiveFresnelParameters.power = 4;

    BABYLON.SceneLoader.ImportMeshAsync("arrow_top", "../../assets/glb/development/", "arrow_top.glb").then((result) => {
      this.arrow_top = this.scene.getMeshByName("arrow_top");
      this.arrow_top.material = this.arrows_MATERIAL;
    });
    BABYLON.SceneLoader.ImportMeshAsync("arrow_bottom", "../../assets/glb/development/", "arrow_bottom.glb").then((result) => {
      this.arrow_bottom = this.scene.getMeshByName("arrow_bottom");
      this.arrow_bottom.material = this.arrows_MATERIAL;
    });
  }

  // WINDOW DIMENSIONS

  public set_windowDimensions(width, height) {
    this.innerWidth = width;
    this.innerHeight = height;
  }

  // IS LOADED

  private sceneIsLoaded():void {
      if(!this.scene_loaded) {
          this.scene_loaded = true;
          this.interaction.isLoaded.next();
          this.addActions_buttons();
      }
  }

  // ADD ACTIONS

  public addActions_buttons():void {
      this.addActions_IconPostgresql();
      this.addActions_IconMavenLeft();
      this.addActions_IconMavenRight();
      this.addActions_IconJava();
      this.addActions_IconSpringFramework();
      this.addActions_IconUbuntuOrange();
      this.addActions_IconUbuntuWhite();
      this.addActions_IconPythonBlue();
      this.addActions_IconPythonYellow();
      this.addActions_IconCss();
      this.addActions_IconHtml();
      this.addActions_IconBootstrap();
      this.addActions_IconAngular();
      this.addActions_IconTypescript();
      this.addActions_IconPostman();
      this.addActions_IconDocker();
      this.addActions_IconGit();
      this.addActions_IconBlender();
      this.addActions_IconBabylon();
      this.addActions_IconPhotoshop();
      this.addActions_IconIllustrator();
      this.addActions_ViaAirMail();
      this.addActions_ThreedGlassesFrame();
      this.addActions_ThreedGlassBlue();
      this.addActions_ThreedGlassRed();
  }

  public activation_buttons():void {
      this.icon_postgresql.isPickable = true;
      this.icon_maven_left.isPickable = true;
      this.icon_maven_right.isPickable = true;
      this.icon_java.isPickable = true;
      this.icon_spring_framework.isPickable = true;
      this.icon_ubuntu_orange.isPickable = true;
      this.icon_ubuntu_white.isPickable = true;
      this.icon_python_blue.isPickable = true;
      this.icon_python_yellow.isPickable = true;
      this.icon_css.isPickable = true;
      this.icon_html.isPickable = true;
      this.icon_bootstrap.isPickable = true;
      this.icon_angular.isPickable = true;
      this.icon_typescript.isPickable = true;
      this.icon_postman.isPickable = true;
      this.icon_docker.isPickable = true;
      this.icon_git.isPickable = true;
      this.icon_blender.isPickable = true;
      this.icon_babylon.isPickable = true;
      this.icon_photoshop.isPickable = true;
      this.icon_illustrator.isPickable = true;
      this.via_air_mail.isPickable = true;
      this.threed_glasses_frame.isPickable = true;
      this.threed_glass_blue.isPickable = true;
      this.threed_glass_red.isPickable = true;
  }

  public activation_buttonsPostgresql():void {
    this.icon_postgresql.isPickable = true;
  }

  public activation_buttonsMaven():void {
    this.icon_maven_left.isPickable = true;
    this.icon_maven_right.isPickable = true;
  }

  public activation_buttonsSpringFramework():void {
    this.icon_spring_framework.isPickable = true;
  }

  public activation_buttonsJava():void {
    this.icon_java.isPickable = true;
  }

  public activation_buttonsUbuntu():void {
    this.icon_ubuntu_orange.isPickable = true;
    this.icon_ubuntu_white.isPickable = true;
  }

  public activation_buttonsPython():void {
    this.icon_python_blue.isPickable = true; this.icon_python_yellow.isPickable = true;
  }

  public activation_buttonsCss():void {
    this.icon_css.isPickable = true;
  }

  public activation_buttonsHtml():void {
    this.icon_html.isPickable = true;
  }

  public activation_buttonsBootstrap():void {
    this.icon_bootstrap.isPickable = true;
  }

  public activation_buttonsAngular():void {
    this.icon_angular.isPickable = true;
  }

  public activation_buttonsTypescript():void {
    this.icon_typescript.isPickable = true;
  }

  public activation_buttonsPostman():void {
    this.icon_postman.isPickable = true;
  }

  public activation_buttonsDocker():void {
    this.icon_docker.isPickable = true;
  }

  public activation_buttonsGit():void {
    this.icon_git.isPickable = true;
  }

  public activation_buttonsBlender():void {
    this.icon_blender.isPickable = true;
  }

  public activation_buttonsBabylon():void {
    this.icon_babylon.isPickable = true;
  }

  public activation_buttonsPhotoshop():void {
    this.icon_photoshop.isPickable = true;
  }

  public activation_buttonsIllustrator():void {
    this.icon_illustrator.isPickable = true;
  }

  public activation_buttonsStereoscopy(): void {
    this.threed_glasses_frame.isPickable = true; this.threed_glass_blue.isPickable = true; this.threed_glass_red.isPickable = true;
  }

  private desactivation_buttons():void {
      this.icon_postgresql.isPickable = false;
      this.icon_maven_left.isPickable = false;
      this.icon_maven_right.isPickable = false;
      this.icon_java.isPickable = false;
      this.icon_spring_framework.isPickable = false;
      this.icon_ubuntu_orange.isPickable = false;
      this.icon_ubuntu_white.isPickable = false;
      this.icon_python_blue.isPickable = false;
      this.icon_python_yellow.isPickable = false;
      this.icon_css.isPickable = false;
      this.icon_html.isPickable = false;
      this.icon_bootstrap.isPickable = false;
      this.icon_angular.isPickable = false;
      this.icon_typescript.isPickable = false;
      this.icon_postman.isPickable = false;
      this.icon_docker.isPickable = false;
      this.icon_git.isPickable = false;
      this.icon_blender.isPickable = false;
      this.icon_babylon.isPickable = false;
      this.icon_photoshop.isPickable = false;
      this.icon_illustrator.isPickable = false;
      this.via_air_mail.isPickable = false;
      this.threed_glasses_frame.isPickable = false;
      this.threed_glass_blue.isPickable = false;
      this.threed_glass_red.isPickable = false;
  }

  public desactivation_buttonsStereoscopy(): void {
    this.threed_glasses_frame.isPickable = false; this.threed_glass_blue.isPickable = false; this.threed_glass_red.isPickable = false;
  }

  public desactivation_buttonsPostgresql():void {
    this.icon_postgresql.isPickable = false;
  }

  public desactivation_buttonsMaven():void {
    this.icon_maven_left.isPickable = false;
    this.icon_maven_right.isPickable = false;
  }

  public desactivation_buttonsSpringFramework():void {
    this.icon_spring_framework.isPickable = false;
  }

  public desactivation_buttonsJava():void {
    this.icon_java.isPickable = false;
  }

  public desactivation_buttonsUbuntu():void {
    this.icon_ubuntu_orange.isPickable = false;
    this.icon_ubuntu_white.isPickable = false;
  }

  public desactivation_buttonsPython():void {
    this.icon_python_blue.isPickable = false; this.icon_python_yellow.isPickable = false;
  }

  public desactivation_buttonsCss():void {
    this.icon_css.isPickable = false;
  }

  public desactivation_buttonsHtml():void {
    this.icon_html.isPickable = false;
  }

  public desactivation_buttonsBootstrap():void {
    this.icon_bootstrap.isPickable = false;
  }

  public desactivation_buttonsAngular():void {
    this.icon_angular.isPickable = false;
  }

  public desactivation_buttonsTypescript():void {
    this.icon_typescript.isPickable = false;
  }

  public desactivation_buttonsPostman():void {
    this.icon_postman.isPickable = false;
  }

  public desactivation_buttonsDocker():void {
    this.icon_docker.isPickable = false;
  }

  public desactivation_buttonsGit():void {
    this.icon_git.isPickable = false;
  }

  public desactivation_buttonsBlender():void {
    this.icon_blender.isPickable = false;
  }

  public desactivation_buttonsBabylon():void {
    this.icon_babylon.isPickable = false;
  }

  public desactivation_buttonsPhotoshop():void {
    this.icon_photoshop.isPickable = false;
  }

  public desactivation_buttonsIllustrator():void {
    this.icon_illustrator.isPickable = false;
  }

  private addActions_IconPostgresql():void {
    this.icon_postgresql.isPickable = true;
    this.icon_postgresql.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_postgresql.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_postgresql.material, "albedoTexture", this.icon_postgresql_BAKING_HIGHLIGHT));
    this.icon_postgresql.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_postgresql.material, "albedoTexture", this.icon_postgresql_BAKING));

    this.icon_postgresql.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_postgresql},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_postgresql.next())
        ]
      )
    );
  }

  private addActions_IconMavenLeft():void {
    this.icon_maven_left.isPickable = true;
    this.icon_maven_left.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_maven_left.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_maven_left.material, "albedoTexture", this.icon_maven_left_BAKING_HIGHLIGHT));
    this.icon_maven_left.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_maven_left.material, "albedoTexture", this.icon_maven_left_BAKING));

    this.icon_maven_left.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_maven_right.material, "albedoTexture", this.icon_maven_right_BAKING_HIGHLIGHT));
    this.icon_maven_left.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_maven_right.material, "albedoTexture", this.icon_maven_right_BAKING));

    this.icon_maven_left.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_maven_left},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_maven.next())
        ]
      )
    );
  }

  private addActions_IconMavenRight() {
    this.icon_maven_right.isPickable = true;
    this.icon_maven_right.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_maven_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_maven_left.material, "albedoTexture", this.icon_maven_left_BAKING_HIGHLIGHT));
    this.icon_maven_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_maven_left.material, "albedoTexture", this.icon_maven_left_BAKING));

    this.icon_maven_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_maven_right.material, "albedoTexture", this.icon_maven_right_BAKING_HIGHLIGHT));
    this.icon_maven_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_maven_right.material, "albedoTexture", this.icon_maven_right_BAKING));

    this.icon_maven_right.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_maven_right},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_maven.next())
        ]
      )
    );
  }

  private addActions_IconJava() {
    this.icon_java.isPickable = true;
    this.icon_java.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_java.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_java.material, "albedoTexture", this.icon_java_BAKING_HIGHLIGHT));
    this.icon_java.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_java.material, "albedoTexture", this.icon_java_BAKING));

    this.icon_java.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_java},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_java.next())
        ]
      )
    );
  }

  private addActions_IconSpringFramework() {
    this.icon_spring_framework.isPickable = true;
    this.icon_spring_framework.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_spring_framework.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_spring_framework.material, "albedoTexture", this.icon_spring_framework_BAKING_HIGHLIGHT));
    this.icon_spring_framework.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_spring_framework.material, "albedoTexture", this.icon_spring_framework_BAKING));

    this.icon_spring_framework.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_spring_framework},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_springFramework.next())
        ]
      )
    );
  }

  private addActions_IconUbuntuOrange() {
    this.icon_ubuntu_orange.isPickable = true;
    this.icon_ubuntu_orange.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_ubuntu_orange.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_ubuntu_orange.material, "albedoTexture", this.icon_ubuntu_orange_BAKING_HIGHLIGHT));
    this.icon_ubuntu_orange.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_ubuntu_orange.material, "albedoTexture", this.icon_ubuntu_orange_BAKING));

    this.icon_ubuntu_orange.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_ubuntu_white.material, "albedoTexture", this.icon_ubuntu_white_BAKING_HIGHLIGHT));
    this.icon_ubuntu_orange.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_ubuntu_white.material, "albedoTexture", this.icon_ubuntu_white_BAKING));

    this.icon_ubuntu_orange.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_ubuntu_orange},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_ubuntu.next())
        ]
      )
    );
  }

  private addActions_IconUbuntuWhite() {
    this.icon_ubuntu_white.isPickable = true;
    this.icon_ubuntu_white.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_ubuntu_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_ubuntu_orange.material, "albedoTexture", this.icon_ubuntu_orange_BAKING_HIGHLIGHT));
    this.icon_ubuntu_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_ubuntu_orange.material, "albedoTexture", this.icon_ubuntu_orange_BAKING));

    this.icon_ubuntu_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_ubuntu_white.material, "albedoTexture", this.icon_ubuntu_white_BAKING_HIGHLIGHT));
    this.icon_ubuntu_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_ubuntu_white.material, "albedoTexture", this.icon_ubuntu_white_BAKING));

    this.icon_ubuntu_white.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_ubuntu_white},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_ubuntu.next())
        ]
      )
    );
  }

  //private addActions_IconApache() {
    //this.icon_apache.isPickable = true;
    //this.icon_apache.actionManager = new BABYLON.ActionManager(this.scene);

    //this.icon_apache.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_apache.material, "albedoTexture", this.icon_apache_BAKING_HIGHLIGHT));
    //this.icon_apache.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_apache.material, "albedoTexture", this.icon_apache_BAKING));

    //this.icon_apache.actionManager.registerAction(new BABYLON.CombineAction(
        //{trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_apache},
        //[
          //new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_apache.next())
        //]
      //)
    //);
  //}

  //private addActions_IconTomcatBlack() {
    //this.icon_tomcat_black.isPickable = true;
    //this.icon_tomcat_black.actionManager = new BABYLON.ActionManager(this.scene);

    //this.icon_tomcat_black.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_apache.material, "albedoTexture", this.icon_apache_black_BAKING_HIGHLIGHT));
    //this.icon_tomcat_black.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_apache.material, "albedoTexture", this.icon_apache_black_BAKING));

    //this.icon_tomcat_black.actionManager.registerAction(new BABYLON.CombineAction(
        //{trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_tomcat_black},
        //[
          //new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.icon_tomcat_black.next())
        //]
      //)
    //);
  //}

  private addActions_IconPythonBlue() {
    this.icon_python_blue.isPickable = true;
    this.icon_python_blue.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_python_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_python_blue.material, "albedoTexture", this.icon_python_blue_BAKING_HIGHLIGHT));
    this.icon_python_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_python_blue.material, "albedoTexture", this.icon_python_blue_BAKING));

    this.icon_python_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_python_yellow.material, "albedoTexture", this.icon_python_yellow_BAKING_HIGHLIGHT));
    this.icon_python_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_python_yellow.material, "albedoTexture", this.icon_python_yellow_BAKING));

    this.icon_python_blue.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_python_blue},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_python.next())
        ]
      )
    );
  }

  private addActions_IconPythonYellow() {
    this.icon_python_yellow.isPickable = true;
    this.icon_python_yellow.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_python_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_python_blue.material, "albedoTexture", this.icon_python_blue_BAKING_HIGHLIGHT));
    this.icon_python_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_python_blue.material, "albedoTexture", this.icon_python_blue_BAKING));

    this.icon_python_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_python_yellow.material, "albedoTexture", this.icon_python_yellow_BAKING_HIGHLIGHT));
    this.icon_python_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_python_yellow.material, "albedoTexture", this.icon_python_yellow_BAKING));

    this.icon_python_yellow.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_python_yellow},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_python.next())
        ]
      )
    );
  }

  private addActions_IconCss() {
    this.icon_css.isPickable = true;
    this.icon_css.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_css.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_css.material, "albedoTexture", this.icon_css_BAKING_HIGHLIGHT));
    this.icon_css.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_css.material, "albedoTexture", this.icon_css_BAKING));

    this.icon_css.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_css},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_css.next())
        ]
      )
    );
  }

  private addActions_IconHtml() {
    this.icon_html.isPickable = true;
    this.icon_html.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_html.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_html.material, "albedoTexture", this.icon_html_BAKING_HIGHLIGHT));
    this.icon_html.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_html.material, "albedoTexture", this.icon_html_BAKING));

    this.icon_html.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_html},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_html.next())
        ]
      )
    );
  }

  private addActions_IconBootstrap() {
    this.icon_bootstrap.isPickable = true;
    this.icon_bootstrap.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_bootstrap.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_bootstrap.material, "albedoTexture", this.icon_bootstrap_BAKING_HIGHLIGHT));
    this.icon_bootstrap.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_bootstrap.material, "albedoTexture", this.icon_bootstrap_BAKING));

    this.icon_bootstrap.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_bootstrap},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_bootstrap.next())
        ]
      )
    );
  }

  private addActions_IconAngular() {
    this.icon_angular.isPickable = true;
    this.icon_angular.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_angular.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_angular.material, "albedoTexture", this.icon_angular_BAKING_HIGHLIGHT));
    this.icon_angular.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_angular.material, "albedoTexture", this.icon_angular_BAKING));

    this.icon_angular.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_angular},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_angular.next())
        ]
      )
    );
  }

  private addActions_IconTypescript() {
    this.icon_typescript.isPickable = true;
    this.icon_typescript.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_typescript.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_typescript.material, "albedoTexture", this.icon_typescript_BAKING_HIGHLIGHT));
    this.icon_typescript.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_typescript.material, "albedoTexture", this.icon_typescript_BAKING));

    this.icon_typescript.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_typescript},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_typescript.next())
        ]
      )
    );
  }

  private addActions_IconPostman() {
    this.icon_postman.isPickable = true;
    this.icon_postman.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_postman.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_postman.material, "albedoTexture", this.icon_postman_BAKING_HIGHLIGHT));
    this.icon_postman.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_postman.material, "albedoTexture", this.icon_postman_BAKING));

    this.icon_postman.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_postman},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_postman.next())
        ]
      )
    );
  }

  private addActions_IconDocker() {
    this.icon_docker.isPickable = true;
    this.icon_docker.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_docker.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_docker.material, "albedoTexture", this.icon_docker_BAKING_HIGHLIGHT));
    this.icon_docker.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_docker.material, "albedoTexture", this.icon_docker_BAKING));

    this.icon_docker.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_docker},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_docker.next())
        ]
      )
    );
  }

  private addActions_IconGit() {
    this.icon_git.isPickable = true;
    this.icon_git.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_git.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_git.material, "albedoTexture", this.icon_git_BAKING_HIGHLIGHT));
    this.icon_git.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_git.material, "albedoTexture", this.icon_git_BAKING));

    this.icon_git.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_git},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_git.next())
        ]
      )
    );
  }

  private addActions_IconBlender() {
    this.icon_blender.isPickable = true;
    this.icon_blender.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_blender.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_blender.material, "albedoTexture", this.icon_blender_BAKING_HIGHLIGHT));
    this.icon_blender.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_blender.material, "albedoTexture", this.icon_blender_BAKING));

    this.icon_blender.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_blender},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_blender.next())
        ]
      )
    );
  }

  private addActions_IconBabylon() {
    this.icon_babylon.isPickable = true;
    this.icon_babylon.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_babylon.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_babylon.material, "albedoTexture", this.icon_babylon_BAKING_HIGHLIGHT));
    this.icon_babylon.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_babylon.material, "albedoTexture", this.icon_babylon_BAKING));

    this.icon_babylon.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_babylon},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_babylon.next())
        ]
      )
    );
  }

  private addActions_IconPhotoshop() {
      this.icon_photoshop.isPickable = true;
      this.icon_photoshop.actionManager = new BABYLON.ActionManager(this.scene);

      this.icon_photoshop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_photoshop.material, "albedoTexture", this.icon_photoshop_BAKING_HIGHLIGHT));
      this.icon_photoshop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_photoshop.material, "albedoTexture", this.icon_photoshop_BAKING));

      this.icon_photoshop.actionManager.registerAction(new BABYLON.CombineAction(
          {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_photoshop},
          [
              new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photoshop.next())
          ]
        )
      );
  }

  private addActions_IconIllustrator() {
    this.icon_illustrator.isPickable = true;
    this.icon_illustrator.actionManager = new BABYLON.ActionManager(this.scene);

    this.icon_illustrator.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.icon_illustrator.material, "albedoTexture", this.icon_illustrator_BAKING_HIGHLIGHT));
    this.icon_illustrator.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.icon_illustrator.material, "albedoTexture", this.icon_illustrator_BAKING));

    this.icon_illustrator.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.icon_illustrator},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_illustrator.next())
        ]
      )
    );
  }

  private addActions_ViaAirMail() {
    this.via_air_mail.isPickable = true;
    this.via_air_mail.actionManager = new BABYLON.ActionManager(this.scene);

    this.via_air_mail.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.via_air_mail.material, "albedoTexture", this.via_air_mail_BAKING_HIGHLIGHT));
    this.via_air_mail.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.via_air_mail.material, "albedoTexture", this.via_air_mail_BAKING));

    this.via_air_mail.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.via_air_mail},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_contactMe.next())
        ]
      )
    );
  }

  private addActions_ThreedGlassesFrame() {
    this.threed_glasses_frame.isPickable = true;
    this.threed_glasses_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glasses_frame .material, "albedoTexture", this.threed_glasses_frame_BAKING_HIGHLIGHT));
    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glasses_frame .material, "albedoTexture", this.threed_glasses_frame_BAKING));

    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", true));
    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", false));

    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", true));
    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", false));

    this.threed_glasses_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_glasses_frame},
        [
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.switch_cameraAnaglyph.next())
        ]
      )
    );
  }

  private addActions_ThreedGlassBlue() {
    this.threed_glass_blue.isPickable = true;
    this.threed_glass_blue.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glasses_frame.material, "albedoTexture", this.threed_glasses_frame_BAKING_HIGHLIGHT));
    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glasses_frame.material, "albedoTexture", this.threed_glasses_frame_BAKING));

    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", true));
    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", false));

    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", true));
    this.threed_glass_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", false));

    this.threed_glass_blue.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_glass_blue},
        [
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.switch_cameraAnaglyph.next())
        ]
      )
    );
  }

  private addActions_ThreedGlassRed() {
    this.threed_glass_red.isPickable = true;
    this.threed_glass_red.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glasses_frame.material, "albedoTexture", this.threed_glasses_frame_BAKING_HIGHLIGHT));
    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glasses_frame.material, "albedoTexture", this.threed_glasses_frame_BAKING));

    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", true));
    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_blue.material, "useEmissiveAsIllumination", false));

    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", true));
    this.threed_glass_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_glass_red.material, "useEmissiveAsIllumination", false));

    this.threed_glass_red.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_glass_red},
        [
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.switch_cameraAnaglyph.next())
        ]
      )
    );
  }

  // INITIAL POSITION CAMERA

  private get_initPositionCamera(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-22, 12, 27);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-45, 25, 55);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-45, 25, 40);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-45, 25, 35);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-38, 20, 30);
    } else {
      return new BABYLON.Vector3(-37, 20, 35);
    }
  }

  private get_initPositionCameraTarget(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-2, 8, 2);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-8, 15, 2);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-6, 18, 2);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-2, 16, 2);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-4, 8, 5);
    } else {
      return new BABYLON.Vector3(5, 7, 0);
    }
  }

  // ENTER DEVELOPMENT

  public animation_enterDevelopment() {
    this.animation_cameraPosition_enterDevelopment();
    this.animation_targetScreenOffset_enterDevelopment();
    this.introduction_closed = true;
  }

  private animation_cameraPosition_enterDevelopment() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraPosition_enterDevelopment', this.universal_camera, 'position', 15, 30, this.universal_camera.position, this.get_initPositionCamera_enterLaboratory(), 0, ease);
  }

  private get_initPositionCamera_enterLaboratory(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-1, 15, 37);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(19, 32, 20);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(17, 30, 20);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(10, 30, 15);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-1, 20, 63);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-1, 20, 55);
    } else {
      return new BABYLON.Vector3(-1, 20, 45);
    }
  }

  private animation_targetScreenOffset_enterDevelopment() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_targetScreenOffset_enterDevelopment', this.universal_camera, 'target', 15, 30, this.universal_camera.target, this.get_initPositionCameraTarget_enterLaboratory(), 0, ease);
  }

  private get_initPositionCameraTarget_enterLaboratory(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-1, 10, 0);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-10, 8, -2);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-10, 10, -1);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-10, 10, -1);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-1, 10, 0);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-1, 10, 0);
    } else {
      return new BABYLON.Vector3(-1, 10, 0);
    }
  }

  // OPEN CARDS

  public open_card(): void {
    this.universalCameraPosition_clone = this.universal_camera.position;
    this.universalCameraTargetPosition_clone = this.universal_camera.target.clone();
    this.animation_camera_openCard();
    this.animation_cameraTarget_openCard();
  }

  private animation_camera_openCard() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_openCard', this.universal_camera, 'position', 15, 30, this.universal_camera.position, this.get_initPositionCamera_openCard(), 0, ease);
  }

  private get_initPositionCamera_openCard(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-22, 12, 27);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-40, 20, 45);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-40, 20, 45);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-40, 20, 50);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-33, 20, 40);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-33, 20, 35);
    } else {
      return new BABYLON.Vector3(-33, 20, 35);
    }
  }

  private animation_cameraTarget_openCard() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraTarget_openCard', this.universal_camera, 'target', 15, 30, this.universal_camera.target, this.get_initPositionCameraTarget_openCard(), 0, ease);
  }

  private get_initPositionCameraTarget_openCard(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-2, 8, 2);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-4, 15, 0);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-4, 8, 0);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-1, 8, 0);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-1, 8, 0);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(1, 7, 0);
    } else {
      return new BABYLON.Vector3(3, 7, 0);
    }
  }

  // CLOSE CARDS

  public close_card(): void {
    this.animation_camera_closeCard();
    this.animation_cameraTarget_closeCard();
  }

  private animation_camera_closeCard() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_closeCard', this.universal_camera, 'position', 15, 30, this.universal_camera.position, this.universalCameraPosition_clone, 0, ease);
  }

  private animation_cameraTarget_closeCard() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraTarget_closeCard', this.universal_camera, 'target', 15, 30, this.universal_camera.target, this.universalCameraTargetPosition_clone, 0, ease);
  }

  // SWITCH CAMERA

  public switch_camera() {
    if(!this.isActive_cameraAnaglyph) {
      this.anaglyph_universal_camera.position = this.universal_camera.position;
      this.anaglyph_universal_camera.rotation = this.universal_camera.rotation;
      this.universal_camera.detachControl();
      this.scene.activeCamera = this.anaglyph_universal_camera;
      this.anaglyph_universal_camera.attachControl(this.canvas, true);
      this.desactivation_buttons();
      this.isActive_cameraAnaglyph = true;
    } else {
      this.universal_camera.position = this.anaglyph_universal_camera.position;
      this.universal_camera.rotation = this.anaglyph_universal_camera.rotation;
      this.anaglyph_universal_camera.detachControl();
      this.scene.activeCamera = this.universal_camera;
      this.universal_camera.attachControl(this.canvas, true);
      this.activation_buttons();
      this.isActive_cameraAnaglyph = false;
    }
  }

  // ANIMATE

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
        this.scene.executeWhenReady(() => this.sceneIsLoaded());
      };

      if (this.windowRef.document.readyState !== 'loading') {
        this.engine.runRenderLoop(rendererLoopCallback);
      } else {
        this.windowRef.window.addEventListener('DOMContentLoaded', () => {
          this.engine.runRenderLoop(rendererLoopCallback);
        });
      }

      this.windowRef.window.addEventListener('resize', () => {
        this.engine.resize();
        if(!this.introduction_closed) {
          this.universal_camera.position = this.get_initPositionCamera();
          this.universal_camera.target = this.get_initPositionCameraTarget();
        }
      });
    });
  }

  // CLEAN UP

  public cleanUp() {
    this.engine.stopRenderLoop();
    this.scene.dispose();
    this.engine.dispose();
    this.scene_loaded = false;
  }

  // SET isMini

  public set_isMini(isMini):void {
    this.isMini = isMini;
  }

  // INIT POSITION

  public init_position(): void {
    this.animation_cameraPosition_enterDevelopment();
    this.animation_targetScreenOffset_enterDevelopment();
  }
}
