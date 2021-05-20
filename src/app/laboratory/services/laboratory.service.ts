import { Injectable, NgZone, ElementRef } from '@angular/core';
import { WindowRefService } from '../../shared/services/window-ref.service';

import * as BABYLON from 'babylonjs';
import 'babylonjs-loaders';

import 'pepjs';

import { InteractionService } from './interaction.service';

@Injectable({
  providedIn: 'root'
})
export class LaboratoryService {

  private isCV: boolean;

  private isMini: boolean;

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
  private directional_light: BABYLON.DirectionalLight;

  private boundary_bottom; boundary_front; boundary_left; boundary_back; boundary_right; boundary_top;
  private wall_left_collision; wall_right_collision;
  private graphic; transfert_boxes; transfert_boxes_rings;
  private rose_rouge; rose_rouge_frame;
  private verbal_shoota; verbal_shoota_frame;
  private lapin_blanc; lapin_blanc_frame;
  private fourty_four; fourty_four_marie_louise; fourty_four_frame;
  private brique; brique_marie_louise; brique_frame;
  private tofu; tofu_marie_louise; tofu_frame;
  private chimney;
  private mirror;
  private trestle_left; trestle_right;
  private desk; reflection_desk;
  private via_air_mail;
  private threed_glasses_frame; threed_glass_blue; threed_glass_red;
  private keyboard; keyboard_keyboard; mac_mini; laptop; laptop_keyboard; laptop_screen; screen_center; screen_frame_center; screen_right; screen_frame_right;
  private glass_left_top; glass_left_bottom; glass_right_top; glass_right_bottom;
  private glass_top_reflection; glass_bottom_reflection;
  private united_kingdom_blue; united_kingdom_white; united_kingdom_red;
  private france_blue; france_white; france_red;
  private spain_red; spain_yellow;
  private shelf;
  private dvd_pi; dvd_enter_the_void; dvd_2001_odyssee_espace; dvd_la_haine; dvd_sweet_sixteen; dvd_eternal_sunshine; dvd_zero_theorem; dvd_shining;
  private book_strategie_choc; book_no_logo; book_serpent_cosmique; book_meilleur_mondes; book_dictionnaire_symboles; book_prince; book_ca_I; book_ca_II; book_ca_III; book_sagrada_biblia; book_nuit_enfants_rois;
  private social_networks;
  private twitter;
  private instagram; instagram_lens;
  private youtube; youtube_play;
  private spotify_green; spotify_black;
  private linkedin_blue; linkedin_white;
  private fiverr_green; fiverr_white;
  private projector;
  private threed_cube; threed_scale; threed_faces;

  private graphic_BAKING: BABYLON.Texture;
  private graphic_BAKING_HIGHLIGHT: BABYLON.Texture;
  private transfert_boxes_BAKING: BABYLON.Texture;
  private transfert_boxes_BAKING_HIGHLIGHT: BABYLON.Texture;
  private transfert_boxes_rings_BAKING: BABYLON.Texture;
  private transfert_boxes_rings_BAKING_HIGHLIGHT: BABYLON.Texture;
  private rose_rouge_BAKING: BABYLON.Texture;
  private rose_rouge_BAKING_HIGHLIGHT: BABYLON.Texture;
  private verbal_shoota_BAKING: BABYLON.Texture;
  private verbal_shoota_BAKING_HIGHLIGHT: BABYLON.Texture;
  private lapin_blanc_BAKING: BABYLON.Texture;
  private lapin_blanc_BAKING_HIGHLIGHT: BABYLON.Texture;
  private fourty_four_BAKING: BABYLON.Texture;
  private fourty_four_BAKING_HIGHLIGHT: BABYLON.Texture;
  private brique_BAKING: BABYLON.Texture;
  private brique_BAKING_HIGHLIGHT: BABYLON.Texture;
  private tofu_BAKING: BABYLON.Texture;
  private tofu_BAKING_HIGHLIGHT: BABYLON.Texture;
  private fourty_four_marie_louise_BAKING: BABYLON.Texture;
  private fourty_four_marie_louise_BAKING_HIGHLIGHT: BABYLON.Texture;
  private brique_marie_louise_BAKING: BABYLON.Texture;
  private brique_marie_louise_BAKING_HIGHLIGHT: BABYLON.Texture;
  private tofu_marie_louise_BAKING: BABYLON.Texture;
  private tofu_marie_louise_BAKING_HIGHLIGHT: BABYLON.Texture;
  private via_air_mail_BAKING: BABYLON.Texture;
  private via_air_mail_BAKING_HIGHLIGHT: BABYLON.Texture;
  private threed_glasses_frame_BAKING: BABYLON.Texture;
  private threed_glasses_frame_BAKING_HIGHLIGHT: BABYLON.Texture;
  private keyboard_BAKING: BABYLON.Texture;
  private keyboard_BAKING_HIGHLIGHT: BABYLON.Texture;
  private mac_mini_BAKING: BABYLON.Texture;
  private mac_mini_BAKING_HIGHLIGHT: BABYLON.Texture;
  private laptop_BAKING: BABYLON.Texture;
  private laptop_BAKING_HIGHLIGHT: BABYLON.Texture;
  private laptop_screen_BAKING: BABYLON.Texture;
  private laptop_screen_BAKING_HIGHLIGHT: BABYLON.Texture;
  private screen_center_BAKING: BABYLON.Texture;
  private screen_center_BAKING_HIGHLIGHT: BABYLON.Texture;
  private screen_right_BAKING: BABYLON.Texture;
  private screen_right_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_pi_BAKING: BABYLON.Texture;
  private dvd_pi_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_enter_the_void_BAKING: BABYLON.Texture;
  private dvd_enter_the_void_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_2001_odyssee_espace_BAKING: BABYLON.Texture;
  private dvd_2001_odyssee_espace_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_la_haine_BAKING: BABYLON.Texture;
  private dvd_la_haine_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_sweet_sixteen_BAKING: BABYLON.Texture;
  private dvd_sweet_sixteen_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_eternal_sunshine_BAKING: BABYLON.Texture;
  private dvd_eternal_sunshine_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_zero_theorem_BAKING: BABYLON.Texture;
  private dvd_zero_theorem_BAKING_HIGHLIGHT: BABYLON.Texture;
  private dvd_shining_BAKING: BABYLON.Texture;
  private dvd_shining_BAKING_HIGHLIGHT: BABYLON.Texture;
  private united_kingdom_red_BAKING: BABYLON.Texture;
  private united_kingdom_red_BAKING_HIGHLIGHT: BABYLON.Texture;
  private united_kingdom_white_BAKING: BABYLON.Texture;
  private united_kingdom_white_BAKING_HIGHLIGHT: BABYLON.Texture;
  private united_kingdom_blue_BAKING: BABYLON.Texture;
  private united_kingdom_blue_BAKING_HIGHLIGHT: BABYLON.Texture;
  private france_blue_BAKING: BABYLON.Texture;
  private france_blue_BAKING_HIGHLIGHT: BABYLON.Texture;
  private france_white_BAKING: BABYLON.Texture;
  private france_white_BAKING_HIGHLIGHT: BABYLON.Texture;
  private france_red_BAKING: BABYLON.Texture;
  private france_red_BAKING_HIGHLIGHT: BABYLON.Texture;
  private spain_red_BAKING: BABYLON.Texture;
  private spain_red_BAKING_HIGHLIGHT: BABYLON.Texture;
  private spain_yellow_BAKING: BABYLON.Texture;
  private spain_yellow_BAKING_HIGHLIGHT: BABYLON.Texture;
  private social_networks_BAKING: BABYLON.Texture;
  private social_networks_BAKING_HIGHLIGHT: BABYLON.Texture;
  private twitter_BAKING: BABYLON.Texture;
  private twitter_BAKING_HIGHLIGHT: BABYLON.Texture;
  private instagram_BAKING: BABYLON.Texture;
  private instagram_BAKING_HIGHLIGHT: BABYLON.Texture;
  private youtube_BAKING: BABYLON.Texture;
  private youtube_BAKING_HIGHLIGHT: BABYLON.Texture;
  private youtube_play_BAKING: BABYLON.Texture;
  private youtube_play_BAKING_HIGHLIGHT: BABYLON.Texture;
  private spotify_green_BAKING: BABYLON.Texture;
  private spotify_green_BAKING_HIGHLIGHT: BABYLON.Texture;
  private linkedin_blue_BAKING: BABYLON.Texture;
  private linkedin_blue_BAKING_HIGHLIGHT: BABYLON.Texture;
  private linkedin_white_BAKING: BABYLON.Texture;
  private linkedin_white_BAKING_HIGHLIGHT: BABYLON.Texture;
  private fiverr_green_BAKING: BABYLON.Texture;
  private fiverr_green_BAKING_HIGHLIGHT: BABYLON.Texture;
  private fiverr_white_BAKING: BABYLON.Texture;
  private fiverr_white_BAKING_HIGHLIGHT: BABYLON.Texture;
  private threed_cube_BAKING: BABYLON.Texture;
  private threed_cube_BAKING_HIGHLIGHT: BABYLON.Texture;
  private threed_scale_BAKING: BABYLON.Texture;
  private threed_scale_BAKING_HIGHLIGHT: BABYLON.Texture;

  private odyssee_espace_TEXTURE: BABYLON.VideoTexture;
  private enter_the_void_TEXTURE: BABYLON.VideoTexture;
  private eternal_sunshine_TEXTURE: BABYLON.VideoTexture;
  private la_haine_TEXTURE: BABYLON.VideoTexture;
  private pi_TEXTURE: BABYLON.VideoTexture;
  private shining_TEXTURE: BABYLON.VideoTexture;
  private zero_theorem_TEXTURE: BABYLON.VideoTexture;

  private trailer_position = 1;
  private all_video_textures_loaded = false;

  private mirror_MATERIAL: BABYLON.StandardMaterial;
  private glass_MATERIAL: BABYLON.StandardMaterial;
  private reflectionDesk_MATERIAL: BABYLON.StandardMaterial;
  private reflectionGlassTop_MATERIAL: BABYLON.StandardMaterial;
  private reflectionGlassBottom_MATERIAL: BABYLON.StandardMaterial;
  private glass_blue_MATERIAL: BABYLON.StandardMaterial;
  private glass_red_MATERIAL: BABYLON.StandardMaterial;
  private projector_MATERIAL: BABYLON.StandardMaterial;
  private threed_faces_MATERIAL: BABYLON.StandardMaterial;

  private fireSystem: BABYLON.ParticleSystem;
  private fire_source: BABYLON.Mesh;
  private smokeSystem: BABYLON.ParticleSystem;

  private scene_loaded = false;
  private introduction_closed = false;

  private isCard_open = false;

  private isActive_cameraAnaglyph = false;

  public constructor(
    private ngZone: NgZone,
    private windowRef: WindowRefService,
    protected readonly interaction: InteractionService
  ) {}

  public createScene(canvas: ElementRef<HTMLCanvasElement>): void {

    // CV

    this.isCV = true;

    // CANVAS / ENGINE / SCENE

    this.canvas = canvas.nativeElement;

    this.engine = new BABYLON.Engine(this.canvas, true, { stencil: true });

    this.scene = new BABYLON.Scene(this.engine);
    this.scene.clearColor = BABYLON.Color4.FromHexString('#1c191bFF');

    // FIRE SOURCE

    this.fire_source = BABYLON.Mesh.CreateBox("foutain", 0.1, this.scene);
    this.fire_source.position = new BABYLON.Vector3(-0.2, 0, -9.4);

    // SMOKE

    this.smokeSystem = new BABYLON.ParticleSystem("particles", 1000, this.scene);
    this.smokeSystem.particleTexture = new BABYLON.Texture("../../assets/glb/laboratory/particles/smoke.png", this.scene);
    this.smokeSystem.emitter = this.fire_source;
    this.smokeSystem.minEmitBox = new BABYLON.Vector3(-1, 1, -1);
    this.smokeSystem.maxEmitBox = new BABYLON.Vector3(1, 1, 1);

    this.smokeSystem.color1 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    this.smokeSystem.color2 = new BABYLON.Color4(0.02, 0.02, 0.02, .02);
    this.smokeSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);

    this.smokeSystem.minSize = 0.5;
    this.smokeSystem.maxSize = 1.5;

    this.smokeSystem.minLifeTime = 0.3;
    this.smokeSystem.maxLifeTime = 1.2;

    this.smokeSystem.emitRate = 150;
    this.smokeSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    this.smokeSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    this.smokeSystem.direction1 = new BABYLON.Vector3(-1.5, 8, -1.5);
    this.smokeSystem.direction2 = new BABYLON.Vector3(1.5, 8, 1.5);

    this.smokeSystem.minAngularSpeed = 0;
    this.smokeSystem.maxAngularSpeed = Math.PI;

    this.smokeSystem.minEmitPower = 0.5;
    this.smokeSystem.maxEmitPower = 1.5;
    this.smokeSystem.updateSpeed = 0.005;

    this.smokeSystem.start();

    // FIRE

    this.fireSystem = new BABYLON.ParticleSystem("particles", 1500, this.scene);
    this.fireSystem.particleTexture = new BABYLON.Texture("../../assets/glb/laboratory/particles/smoke.png", this.scene);
    this.fireSystem.emitter = this.fire_source;
    this.fireSystem.minEmitBox = new BABYLON.Vector3(-0.6, 1, -0.6);
    this.fireSystem.maxEmitBox = new BABYLON.Vector3(0.6, 1, 0.6);
    this.fireSystem.color1 = new BABYLON.Color4(1, 0.5, 0, 0.6);
    this.fireSystem.color2 = new BABYLON.Color4(1, 0.5, 0, 0.6);
    this.fireSystem.colorDead = new BABYLON.Color4(0, 0, 0, 0.0);
    this.fireSystem.minSize = 0.3;
    this.fireSystem.maxSize = 1;
    this.fireSystem.minLifeTime = 0.2;
    this.fireSystem.maxLifeTime = 0.4;
    this.fireSystem.emitRate = 300;
    this.fireSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;
    this.fireSystem.gravity = new BABYLON.Vector3(0, 0, 0);
    this.fireSystem.direction1 = new BABYLON.Vector3(0, 4, 0);
    this.fireSystem.direction2 = new BABYLON.Vector3(0, 4, 0);
    this.fireSystem.minAngularSpeed = 0;
    this.fireSystem.maxAngularSpeed = Math.PI;
    this.fireSystem.minEmitPower = 1;
    this.fireSystem.maxEmitPower = 3;
    this.fireSystem.updateSpeed = 0.005;
    this.fireSystem.start();

    // CANERAS

    this.universal_camera = new BABYLON.UniversalCamera("universal_camera", new BABYLON.Vector3(0, 0, 0), this.scene);
    this.universal_camera.position = this.get_initPositionCamera();
    this.universal_camera.target = this.get_initPositionCameraTarget();
    this.universal_camera.touchAngularSensibility = 10000;
    this.universal_camera.speed = 0.7;
    this.universal_camera.inputs.addMouseWheel();
    this.universal_camera.attachControl(canvas);

    this.anaglyph_universal_camera = new BABYLON.AnaglyphUniversalCamera("anaglyph_universal_camera", new BABYLON.Vector3(0, 0, 0), 0.05, this.scene);
    this.anaglyph_universal_camera.touchAngularSensibility = 10000;
    this.anaglyph_universal_camera.speed = 0.7;
    this.anaglyph_universal_camera.inputs.addMouseWheel();

    // COLLISIONS

    this.scene.collisionsEnabled = true;
    this.universal_camera.checkCollisions = true;
    this.anaglyph_universal_camera.checkCollisions = true;

    // BOUNDARIES

    this.boundary_bottom = BABYLON.Mesh.CreatePlane("boundary_bottom", 200, this.scene);
    this.boundary_bottom.position = new BABYLON.Vector3(-16.2, 0, -10);
    this.boundary_bottom.rotation = new BABYLON.Vector3(Math.PI/2, 0, 0);
    this.boundary_bottom.isVisible = false;

    this.boundary_front = BABYLON.Mesh.CreatePlane("boundary_front", 200, this.scene);
    this.boundary_front.position = new BABYLON.Vector3(-16.2, 50, 60);
    this.boundary_front.isVisible = false;

    this.boundary_left = BABYLON.Mesh.CreatePlane("boundary_left", 200, this.scene);
    this.boundary_left.position = new BABYLON.Vector3(20, 50, 0);
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

    BABYLON.SceneLoader.ImportMeshAsync("wall_left_collision", "../../assets/glb/laboratory/", "wall_left_collision.glb").then((result) => {
      this.wall_left_collision = this.scene.getMeshByName("wall_left_collision");
      this.wall_left_collision.isVisible = false;
      this.wall_left_collision.checkCollisions = true;
    });

    BABYLON.SceneLoader.ImportMeshAsync("wall_right_collision", "../../assets/glb/laboratory/", "wall_right_collision.glb").then((result) => {
      this.wall_right_collision = this.scene.getMeshByName("wall_right_collision");
      this.wall_right_collision.isVisible = false;
      this.wall_right_collision.checkCollisions = true;
    });


    // LIGHTS

    this.hemispheric_light = new BABYLON.HemisphericLight('hemispheric_light', new BABYLON.Vector3(0, 1, 0), this.scene);
    this.hemispheric_light.intensity = 1.1;

    this.directional_light = new BABYLON.DirectionalLight("directional_light", new BABYLON.Vector3(1, -5, -2), this.scene);
    this.directional_light.intensity = 0.7;
    this.directional_light.diffuse = new BABYLON.Color3(0.4, 0, 0.2);
    this.directional_light.specular = new BABYLON.Color3(0, 0, 0);

    // PLANS

    BABYLON.SceneLoader.ImportMeshAsync("plan_inside", "../../assets/glb/laboratory/", "plan_inside.glb").then((result) => {
    });

    // FLOOR

    BABYLON.SceneLoader.ImportMeshAsync("parquet", "../../assets/glb/laboratory/", "parquet.glb").then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("persian_carpet", "../../assets/glb/laboratory/", "persian_carpet.glb").then((result) => {
    });

    // PEGASUS

    BABYLON.SceneLoader.ImportMeshAsync("pegasus", "../../assets/glb/laboratory/", "pegasus.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("pegasus_inside", "../../assets/glb/laboratory/", "pegasus_inside.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("pegasus_laces", "../../assets/glb/laboratory/", "pegasus_laces.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("pegasus_logo", "../../assets/glb/laboratory/", "pegasus_logo.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("pegasus_sole_inside", "../../assets/glb/laboratory/", "pegasus_sole_inside.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("pegasus_sole_outside", "../../assets/glb/laboratory/", "pegasus_sole_outside.glb", this.scene).then((result) => {
    });

    // SPEAKERS

    BABYLON.SceneLoader.ImportMeshAsync("speakers", "../../assets/glb/laboratory/", "speakers.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("loud_speakers", "../../assets/glb/laboratory/", "loud_speakers.glb", this.scene).then((result) => {
    });

    // CHIVA

    BABYLON.SceneLoader.ImportMeshAsync("chiva", "../../assets/glb/laboratory/", "chiva.glb", this.scene).then((result) => {
    });

    // LEATHER ARMCHAIR

    BABYLON.SceneLoader.ImportMeshAsync("leather_armchair", "../../assets/glb/laboratory/", "leather_armchair.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("blanket", "../../assets/glb/laboratory/", "blanket.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("ome_gonorreas", "../../assets/glb/laboratory/", "ome_gonorreas.glb", this.scene).then((result) => {
    });

    // LAMP

    BABYLON.SceneLoader.ImportMeshAsync("lampshade_tissue", "../../assets/glb/laboratory/", "lampshade_tissue.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("lampshade", "../../assets/glb/laboratory/", "lampshade.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("lamp_base", "../../assets/glb/laboratory/", "lamp_base.glb", this.scene).then((result) => {
    });
    BABYLON.SceneLoader.ImportMeshAsync("lamp_base_bar", "../../assets/glb/laboratory/", "lamp_base_bar.glb", this.scene).then((result) => {
    });

    // TRANSFERT BOXES

    this.graphic_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/graphic_BAKING.jpg", this.scene, false, false);
    this.graphic_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/graphic_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.transfert_boxes_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/transfert_boxes_BAKING.jpg", this.scene, false, false);
    this.transfert_boxes_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/transfert_boxes_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.transfert_boxes_rings_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/transfert_boxes_rings_BAKING.jpg", this.scene, false, false);
    this.transfert_boxes_rings_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/transfert_boxes_rings_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    BABYLON.SceneLoader.ImportMeshAsync("graphic", "../../assets/glb/laboratory/", "graphic.glb", this.scene).then((result) => {
      this.graphic = this.scene.getMeshByName("graphic");
    });

    BABYLON.SceneLoader.ImportMeshAsync("transfert_boxes", "../../assets/glb/laboratory/", "transfert_boxes.glb", this.scene).then((result) => {
      this.transfert_boxes = this.scene.getMeshByName("transfert_boxes");
    });

    BABYLON.SceneLoader.ImportMeshAsync("transfert_boxes_rings", "../../assets/glb/laboratory/", "transfert_boxes_rings.glb", this.scene).then((result) => {
      this.transfert_boxes_rings = this.scene.getMeshByName("transfert_boxes_rings");
    });

    // PHOTOGRAPHY

    this.rose_rouge_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/rose_rouge_BAKING.jpg", this.scene, false, false);
    this.rose_rouge_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/rose_rouge_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.verbal_shoota_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/verbal_shoota_BAKING.jpg", this.scene, false, false);
    this.verbal_shoota_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/verbal_shoota_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.lapin_blanc_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/lapin_blanc_BAKING.jpg", this.scene, false, false);
    this.lapin_blanc_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/lapin_blanc_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.fourty_four_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/fourty_four_BAKING.jpg", this.scene, false, false);
    this.fourty_four_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/fourty_four_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.brique_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/brique_BAKING.jpg", this.scene, false, false);
    this.brique_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/brique_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.tofu_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/tofu_BAKING.jpg", this.scene, false, false);
    this.tofu_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/tofu_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.fourty_four_marie_louise_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/fourty_four_marie_louise_BAKING.jpg", this.scene, false, false);
    this.fourty_four_marie_louise_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/fourty_four_marie_louise_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.brique_marie_louise_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/brique_marie_louise_BAKING.jpg", this.scene, false, false);
    this.brique_marie_louise_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/brique_marie_louise_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    this.tofu_marie_louise_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/tofu_marie_louise_BAKING.jpg", this.scene, false, false);
    this.tofu_marie_louise_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/tofu_marie_louise_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

    BABYLON.SceneLoader.ImportMeshAsync("rose_rouge", "../../assets/glb/laboratory/", "rose_rouge.glb", this.scene).then((result) => {
      this.rose_rouge = this.scene.getMeshByName("rose_rouge");
    });

    BABYLON.SceneLoader.ImportMeshAsync("rose_rouge_frame", "../../assets/glb/laboratory/", "rose_rouge_frame.glb", this.scene).then((result) => {
      this.rose_rouge_frame = this.scene.getMeshByName("rose_rouge_frame");
    });

    BABYLON.SceneLoader.ImportMeshAsync("verbal_shoota", "../../assets/glb/laboratory/", "verbal_shoota.glb", this.scene).then((result) => {
      this.verbal_shoota = this.scene.getMeshByName("verbal_shoota");
    });

    BABYLON.SceneLoader.ImportMeshAsync("verbal_shoota_frame", "../../assets/glb/laboratory/", "verbal_shoota_frame.glb", this.scene).then((result) => {
      this.verbal_shoota_frame = this.scene.getMeshByName("verbal_shoota_frame");
    });

    BABYLON.SceneLoader.ImportMeshAsync("lapin_blanc", "../../assets/glb/laboratory/", "lapin_blanc.glb", this.scene).then((result) => {
      this.lapin_blanc = this.scene.getMeshByName("lapin_blanc");
    });

    BABYLON.SceneLoader.ImportMeshAsync("lapin_blanc_frame", "../../assets/glb/laboratory/", "lapin_blanc_frame.glb", this.scene).then((result) => {
      this.lapin_blanc_frame = this.scene.getMeshByName("lapin_blanc_frame");
    });

    BABYLON.SceneLoader.ImportMeshAsync("fourty_four", "../../assets/glb/laboratory/", "fourty_four.glb", this.scene).then((result) => {
      this.fourty_four = this.scene.getMeshByName("fourty_four");
    });

    BABYLON.SceneLoader.ImportMeshAsync("fourty_four_marie_louise", "../../assets/glb/laboratory/", "fourty_four_marie_louise.glb", this.scene).then((result) => {
      this.fourty_four_marie_louise = this.scene.getMeshByName("fourty_four_marie_louise");
    });

    BABYLON.SceneLoader.ImportMeshAsync("fourty_four_frame", "../../assets/glb/laboratory/", "fourty_four_frame.glb", this.scene).then((result) => {
      this.fourty_four_frame = this.scene.getMeshByName("fourty_four_frame");
    });

    BABYLON.SceneLoader.ImportMeshAsync("brique", "../../assets/glb/laboratory/", "brique.glb", this.scene).then((result) => {
      this.brique = this.scene.getMeshByName("brique");
    });

    BABYLON.SceneLoader.ImportMeshAsync("brique_marie_louise", "../../assets/glb/laboratory/", "brique_marie_louise.glb", this.scene).then((result) => {
      this.brique_marie_louise = this.scene.getMeshByName("brique_marie_louise");
    });

    BABYLON.SceneLoader.ImportMeshAsync("brique_frame", "../../assets/glb/laboratory/", "brique_frame.glb", this.scene).then((result) => {
      this.brique_frame = this.scene.getMeshByName("brique_frame");
    });

    BABYLON.SceneLoader.ImportMeshAsync("tofu", "../../assets/glb/laboratory/", "tofu.glb", this.scene).then((result) => {
      this.tofu = this.scene.getMeshByName("tofu");
    });

    BABYLON.SceneLoader.ImportMeshAsync("tofu_marie_louise", "../../assets/glb/laboratory/", "tofu_marie_louise.glb", this.scene).then((result) => {
      this.tofu_marie_louise = this.scene.getMeshByName("tofu_marie_louise");
    });

    BABYLON.SceneLoader.ImportMeshAsync("tofu_frame", "../../assets/glb/laboratory/", "tofu_frame.glb", this.scene).then((result) => {
      this.tofu_frame = this.scene.getMeshByName("tofu_frame");
    });

  // CHIMNEY

  BABYLON.SceneLoader.ImportMeshAsync("chimney", "../../assets/glb/laboratory/", "chimney.glb", this.scene).then((result) => {
    this.chimney = this.scene.getMeshByName("chimney");
  });

  var chimney_back_MATERIAL = new BABYLON.StandardMaterial("myMaterial", this.scene);
  chimney_back_MATERIAL.diffuseColor = new BABYLON.Color3(0, 0, 0);
  chimney_back_MATERIAL.specularColor = new BABYLON.Color3(0, 0, 0);
  chimney_back_MATERIAL.emissiveColor = new BABYLON.Color3(0, 0, 0);
  chimney_back_MATERIAL.ambientColor = new BABYLON.Color3(0, 0, 0);

  BABYLON.SceneLoader.ImportMeshAsync("chimney_back", "../../assets/glb/laboratory/", "chimney_back.glb", this.scene).then((result) => {
      const chimney_back = this.scene.getMeshByName("chimney_back");
      chimney_back.material = chimney_back_MATERIAL;
  });

  // LOGS

  BABYLON.SceneLoader.ImportMeshAsync("logs", "../../assets/glb/laboratory/", "logs.glb", this.scene).then((result) => {
  });

  // CHECKER

  BABYLON.SceneLoader.ImportMeshAsync("checker", "../../assets/glb/laboratory/", "checker.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("checker_locks", "../../assets/glb/laboratory/", "checker_locks.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("checker_bottom", "../../assets/glb/laboratory/", "checker_bottom.glb", this.scene).then((result) => {
  });

  // TAROT DECK

  BABYLON.SceneLoader.ImportMeshAsync("tarot_deck", "../../assets/glb/laboratory/", "tarot_deck.glb", this.scene).then((result) => {
  });

  // VIRGEN

  BABYLON.SceneLoader.ImportMeshAsync("virgen_guadalupe", "../../assets/glb/laboratory/", "virgen_guadalupe.glb", this.scene).then((result) => {
  });

  // VIRGEN

  BABYLON.SceneLoader.ImportMeshAsync("book_programmer_java", "../../assets/glb/laboratory/", "book_programmer_java.glb", this.scene).then((result) => {
  });

  // CANDELSTICK

  BABYLON.SceneLoader.ImportMeshAsync("candelstick", "../../assets/glb/laboratory/", "candelstick.glb", this.scene).then((result) => {
  });

  // WALL LEFT

  BABYLON.SceneLoader.ImportMeshAsync("wall_left_front", "../../assets/glb/laboratory/", "wall_left_front.glb", this.scene).then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("wall_left_back", "../../assets/glb/laboratory/", "wall_left_back.glb", this.scene).then((result) => {
  });

  // MIRROR

  BABYLON.SceneLoader.ImportMeshAsync("mirror_frame", "../../assets/glb/laboratory/", "mirror_frame.glb", this.scene).then((result) => {
  });

  this.mirror = BABYLON.MeshBuilder.CreatePlane("mirror", {width: 5.8, height: 9.2}, this.scene);
  this.mirror.position = new BABYLON.Vector3(-0.01, 11.8, -9.3);
  this.mirror.rotation = new BABYLON.Vector3(0, 1.57, 0);
  this.mirror.computeWorldMatrix(true);
  var glass_worldMatrix = this.mirror.getWorldMatrix();
  var glass_vertexData = this.mirror.getVerticesData("normal");
  var glassNormal = new BABYLON.Vector3(glass_vertexData[0], glass_vertexData[1], glass_vertexData[2]);
  glassNormal = BABYLON.Vector3.TransformNormal(glassNormal, glass_worldMatrix);
  var reflector = BABYLON.Plane.FromPositionAndNormal(this.mirror.position, glassNormal.scale(-1));
  this.mirror_MATERIAL = new BABYLON.StandardMaterial("mirror_MATERIAL", this.scene);
  this.mirror_MATERIAL.diffuseColor = new BABYLON.Color3(0.10, 0.10, 0.12);
  this.mirror.material = this.mirror_MATERIAL;
  var mirrorTexture = new BABYLON.MirrorTexture("mirrorTexture", 1024, this.scene);
  mirrorTexture.level = 1;
  mirrorTexture.mirrorPlane = reflector;
  mirrorTexture.renderList = this.scene.meshes;
  this.mirror.material.reflectionTexture = mirrorTexture;

  // DAISY

  BABYLON.SceneLoader.ImportMeshAsync("daisy", "../../assets/glb/laboratory/", "daisy.glb", this.scene).then((result) => {
  });

  // AMOR AMOR

  BABYLON.SceneLoader.ImportMeshAsync("amor_amor", "../../assets/glb/laboratory/", "amor_amor.glb", this.scene).then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("amor_amor_frame", "../../assets/glb/laboratory/", "amor_amor_frame.glb", this.scene).then((result) => {
  });

  // DESK

  BABYLON.SceneLoader.ImportMeshAsync("trestle_left", "../../assets/glb/laboratory/", "trestle_left.glb", this.scene).then((result) => {
    this.trestle_left = this.scene.getMeshByName("trestle_left");
  });

  BABYLON.SceneLoader.ImportMeshAsync("trestle_right", "../../assets/glb/laboratory/", "trestle_right.glb", this.scene).then((result) => {
    this.trestle_right = this.scene.getMeshByName("trestle_right");
  });

  this.reflection_desk = BABYLON.MeshBuilder.CreatePlane("mirror", {width: 7.2, height: 16.22}, this.scene);
  this.reflection_desk.position = new BABYLON.Vector3(-16.35, 5.25, -15);
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

  BABYLON.SceneLoader.ImportMeshAsync("desk", "../../assets/glb/laboratory/", "desk.glb", this.scene).then((result) => {
    this.desk = this.scene.getMeshByName("desk");
    this.desk.material = this.glass_MATERIAL;
  });

  // VIA AIR MAIL

  this.via_air_mail_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/via_air_mail_BAKING.jpg", this.scene, false, false);
  this.via_air_mail_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/via_air_mail_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("via_air_mail", "../../assets/glb/laboratory/", "via_air_mail.glb", this.scene).then((result) => {
    this.via_air_mail = this.scene.getMeshByName("via_air_mail");
  });

  // RINCE COCHON

  BABYLON.SceneLoader.ImportMeshAsync("rince_cochon", "../../assets/glb/laboratory/", "rince_cochon.glb", this.scene).then((result) => {
  });

  // THERMOS

  BABYLON.SceneLoader.ImportMeshAsync("thermos", "../../assets/glb/laboratory/", "thermos.glb", this.scene).then((result) => {
  });

  // POST-IT

  BABYLON.SceneLoader.ImportMeshAsync("post_it", "../../assets/glb/laboratory/", "post_it.glb", this.scene).then((result) => {
  });

  // MOTEBOOKS

  BABYLON.SceneLoader.ImportMeshAsync("notebook_bottom", "../../assets/glb/laboratory/", "notebook_bottom.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("notebook_top", "../../assets/glb/laboratory/", "notebook_top.glb", this.scene).then((result) => {
  });

  // 3D GLASSES

  this.threed_glasses_frame_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_glasses_frame_BAKING.jpg", this.scene, false, false);
  this.threed_glasses_frame_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_glasses_frame_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("threed_glasses_frame", "../../assets/glb/laboratory/", "threed_glasses_frame.glb", this.scene).then((result) => {
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

  BABYLON.SceneLoader.ImportMeshAsync("threed_glass_blue", "../../assets/glb/laboratory/", "threed_glass_blue.glb", this.scene).then((result) => {
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

  BABYLON.SceneLoader.ImportMeshAsync("threed_glass_red", "../../assets/glb/laboratory/", "threed_glass_red.glb", this.scene).then((result) => {
    this.threed_glass_red = this.scene.getMeshByName("threed_glass_red");
    this.threed_glass_red.material = this.glass_red_MATERIAL;
  });

  // COMPUTERS

  BABYLON.SceneLoader.ImportMeshAsync("support_laptop", "../../assets/glb/laboratory/", "support_laptop.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("wood_box_center", "../../assets/glb/laboratory/", "wood_box_center.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("wood_box_right", "../../assets/glb/laboratory/", "wood_box_right.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("mouse", "../../assets/glb/laboratory/", "mouse.glb", this.scene).then((result) => {
  });

  this.keyboard_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/keyboard_BAKING.jpg", this.scene, false, false);
  this.keyboard_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/keyboard_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.mac_mini_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/mac_mini_BAKING.jpg", this.scene, false, false);
  this.mac_mini_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/mac_mini_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.laptop_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/laptop_BAKING.jpg", this.scene, false, false);
  this.laptop_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/laptop_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.laptop_screen_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/laptop_screen_BAKING.jpg", this.scene, false, false);
  this.laptop_screen_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/laptop_screen_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.screen_center_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/screen_center_BAKING.jpg", this.scene, false, false);
  this.screen_center_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/screen_center_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.screen_right_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/screen_right_BAKING.jpg", this.scene, false, false);
  this.screen_right_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/screen_right_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("keyboard", "../../assets/glb/laboratory/", "keyboard.glb", this.scene).then((result) => {
    this.keyboard = this.scene.getMeshByName("keyboard");
  });

  BABYLON.SceneLoader.ImportMeshAsync("keyboard_keyboard", "../../assets/glb/laboratory/", "keyboard_keyboard.glb", this.scene).then((result) => {
    this.keyboard_keyboard = this.scene.getMeshByName("keyboard_keyboard");
  });

  BABYLON.SceneLoader.ImportMeshAsync("mac_mini", "../../assets/glb/laboratory/", "mac_mini.glb", this.scene).then((result) => {
    this.mac_mini = this.scene.getMeshByName("mac_mini");
  });

  BABYLON.SceneLoader.ImportMeshAsync("laptop", "../../assets/glb/laboratory/", "laptop.glb", this.scene).then((result) => {
    this.laptop = this.scene.getMeshByName("laptop");
  });

  BABYLON.SceneLoader.ImportMeshAsync("laptop_keyboard", "../../assets/glb/laboratory/", "laptop_keyboard.glb", this.scene).then((result) => {
    this.laptop_keyboard = this.scene.getMeshByName("laptop_keyboard");
  });

  BABYLON.SceneLoader.ImportMeshAsync("laptop_screen", "../../assets/glb/laboratory/", "laptop_screen.glb", this.scene).then((result) => {
      this.laptop_screen = this.scene.getMeshByName("laptop_screen");
  });

  BABYLON.SceneLoader.ImportMeshAsync("screen_frame_center", "../../assets/glb/laboratory/", "screen_frame_center.glb", this.scene).then((result) => {
    this.screen_frame_center = this.scene.getMeshByName("screen_frame_center");
  });

  BABYLON.SceneLoader.ImportMeshAsync("screen_center", "../../assets/glb/laboratory/", "screen_center.glb", this.scene).then((result) => {
    this.screen_center = this.scene.getMeshByName("screen_center");
  });

  BABYLON.SceneLoader.ImportMeshAsync("screen_frame_right", "../../assets/glb/laboratory/", "screen_frame_right.glb", this.scene).then((result) => {
    this.screen_frame_right = this.scene.getMeshByName("screen_frame_right");
  });

  BABYLON.SceneLoader.ImportMeshAsync("screen_right", "../../assets/glb/laboratory/", "screen_right.glb", this.scene).then((result) => {
    this.screen_right = this.scene.getMeshByName("screen_right");
  });

  // WALL RIGHT

  BABYLON.SceneLoader.ImportMeshAsync("wall_right_front", "../../assets/glb/laboratory/", "wall_right_front.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("wall_right_back", "../../assets/glb/laboratory/", "wall_right_back.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("baseboard_right", "../../assets/glb/laboratory/", "baseboard_right.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("window_left", "../../assets/glb/laboratory/", "window_left.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("window_right", "../../assets/glb/laboratory/", "window_right.glb", this.scene).then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_left_top", "../../assets/glb/laboratory/", "glass_left_top.glb", this.scene).then((result) => {
    this.glass_left_top = this.scene.getMeshByName("glass_left_top");
    this.glass_left_top.material = this.glass_MATERIAL;
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_left_bottom", "../../assets/glb/laboratory/", "glass_left_bottom.glb", this.scene).then((result) => {
    this.glass_left_bottom = this.scene.getMeshByName("glass_left_bottom");
    this.glass_left_bottom.material = this.glass_MATERIAL;
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_right_top", "../../assets/glb/laboratory/", "glass_right_top.glb", this.scene).then((result) => {
    this.glass_right_top = this.scene.getMeshByName("glass_right_top");
    this.glass_right_top.material = this.glass_MATERIAL;
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_right_bottom", "../../assets/glb/laboratory/", "glass_right_bottom.glb", this.scene).then((result) => {
    this.glass_right_bottom = this.scene.getMeshByName("glass_right_bottom");
    this.glass_right_bottom.material = this.glass_MATERIAL;
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_top_reflection", "../../assets/glb/laboratory/", "glass_top_reflection.glb", this.scene).then((result) => {
    this.glass_top_reflection = this.scene.getMeshByName("glass_top_reflection");
    var reflectionGlassTop_worldMatrix = this.glass_top_reflection.getWorldMatrix();
    var reflectionGlassTop_vertexData = this.glass_top_reflection.getVerticesData("normal");
    var reflectionGlassTop_Normal = new BABYLON.Vector3(reflectionGlassTop_vertexData[0], reflectionGlassTop_vertexData[1], reflectionGlassTop_vertexData[2]);
    reflectionGlassTop_Normal = BABYLON.Vector3.TransformNormal(reflectionGlassTop_Normal, reflectionGlassTop_worldMatrix);
    var reflectionGlassTop_reflector = BABYLON.Plane.FromPositionAndNormal(this.glass_top_reflection.position, reflectionGlassTop_Normal.scale(-1));
    this.reflectionGlassTop_MATERIAL = new BABYLON.StandardMaterial("reflectionGlassBottom_MATERIAL", this.scene);
    this.reflectionGlassTop_MATERIAL.alpha = 0.3;
    this.reflectionGlassTop_MATERIAL.diffuseColor = new BABYLON.Color3(0.10, 0.10, 0.10);
    this.glass_top_reflection.material = this.reflectionGlassTop_MATERIAL;
    var reflectionGlassTop_Texture = new BABYLON.MirrorTexture("reflectionGlassTop_Texture", 1024, this.scene);
    reflectionGlassTop_Texture.level = 1;
    reflectionGlassTop_Texture.mirrorPlane = reflectionGlassTop_reflector;
    reflectionGlassTop_Texture.renderList = this.scene.meshes;
    this.glass_top_reflection.material.reflectionTexture = reflectionGlassTop_Texture;
  });

  BABYLON.SceneLoader.ImportMeshAsync("glass_bottom_reflection", "../../assets/glb/laboratory/", "glass_bottom_reflection.glb", this.scene).then((result) => {
    this.glass_bottom_reflection = this.scene.getMeshByName("glass_bottom_reflection");
    var reflectionGlassBottom_worldMatrix = this.glass_bottom_reflection.getWorldMatrix();
    var reflectionGlassBottom_vertexData = this.glass_bottom_reflection.getVerticesData("normal");
    var reflectionGlassBottom_Normal = new BABYLON.Vector3(reflectionGlassBottom_vertexData[0], reflectionGlassBottom_vertexData[1], reflectionGlassBottom_vertexData[2]);
    reflectionGlassBottom_Normal = BABYLON.Vector3.TransformNormal(reflectionGlassBottom_Normal, reflectionGlassBottom_worldMatrix);
    var reflectionGlassBottom_reflector = BABYLON.Plane.FromPositionAndNormal(this.glass_bottom_reflection.position, reflectionGlassBottom_Normal.scale(-1));
    this.reflectionGlassBottom_MATERIAL = new BABYLON.StandardMaterial("reflectionGlassBottom_MATERIAL", this.scene);
    this.reflectionGlassBottom_MATERIAL.alpha = 0.3;
    this.reflectionGlassBottom_MATERIAL.diffuseColor = new BABYLON.Color3(0.10, 0.10, 0.10);
    this.glass_bottom_reflection.material = this.reflectionGlassBottom_MATERIAL;
    var reflectionGlassBottom_Texture = new BABYLON.MirrorTexture("reflectionGlassBottom_Texture", 1024, this.scene);
    reflectionGlassBottom_Texture.level = 1;
    reflectionGlassBottom_Texture.mirrorPlane = reflectionGlassBottom_reflector;
    reflectionGlassBottom_Texture.renderList = this.scene.meshes;
    this.glass_bottom_reflection.material.reflectionTexture = reflectionGlassBottom_Texture;
  });

  // NHS RAINBOW

  BABYLON.SceneLoader.ImportMeshAsync("nhs_rainbow", "../../assets/glb/laboratory/", "nhs_rainbow.glb", this.scene).then((result) => {
  });

  // SOLAR SYSTEM

  BABYLON.SceneLoader.ImportMeshAsync("solar_system", "../../assets/glb/laboratory/", "solar_system.glb", this.scene).then((result) => {
  });

  // PABLO

  BABYLON.SceneLoader.ImportMeshAsync("pablo", "../../assets/glb/laboratory/", "pablo.glb", this.scene).then((result) => {
  });

  // LANGUAGES

  this.united_kingdom_red_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_red_BAKING.jpg", this.scene, false, false);
  this.united_kingdom_red_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_red_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.united_kingdom_white_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_white_BAKING.jpg", this.scene, false, false);
  this.united_kingdom_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.united_kingdom_blue_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_blue_BAKING.jpg", this.scene, false, false);
  this.united_kingdom_blue_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_blue_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("united_kingdom_black", "../../assets/glb/laboratory/", "united_kingdom_black.glb").then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("united_kingdom_blue", "../../assets/glb/laboratory/", "united_kingdom_blue.glb").then((result) => {
    this.united_kingdom_blue = this.scene.getMeshByName("united_kingdom_blue");
  });

  BABYLON.SceneLoader.ImportMeshAsync("united_kingdom_white", "../../assets/glb/laboratory/", "united_kingdom_white.glb").then((result) => {
    this.united_kingdom_white = this.scene.getMeshByName("united_kingdom_white");
  });

  BABYLON.SceneLoader.ImportMeshAsync("united_kingdom_red", "../../assets/glb/laboratory/", "united_kingdom_red.glb").then((result) => {
    this.united_kingdom_red = this.scene.getMeshByName("united_kingdom_red");
  });

  this.france_blue_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/france_blue_BAKING.jpg", this.scene, false, false);
  this.france_blue_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/united_kingdom_blue_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.france_white_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/france_white_BAKING.jpg", this.scene, false, false);
  this.france_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/france_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.france_red_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/france_red_BAKING.jpg", this.scene, false, false);
  this.france_red_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/france_red_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("france_black", "../../assets/glb/laboratory/", "france_black.glb").then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("france_blue", "../../assets/glb/laboratory/", "france_blue.glb").then((result) => {
    this.france_blue = this.scene.getMeshByName("france_blue");
  });

  BABYLON.SceneLoader.ImportMeshAsync("france_white", "../../assets/glb/laboratory/", "france_white.glb").then((result) => {
    this.france_white = this.scene.getMeshByName("france_white");
  });

  BABYLON.SceneLoader.ImportMeshAsync("france_red", "../../assets/glb/laboratory/", "france_red.glb").then((result) => {
    this.france_red = this.scene.getMeshByName("france_red");
  });

  this.spain_red_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/spain_red_BAKING.jpg", this.scene, false, false);
  this.spain_red_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/spain_red_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.spain_yellow_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/spain_yellow_BAKING.jpg", this.scene, false, false);
  this.spain_yellow_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/spain_yellow_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("spain_black", "../../assets/glb/laboratory/", "spain_black.glb").then((result) => {
  });

  BABYLON.SceneLoader.ImportMeshAsync("spain_red", "../../assets/glb/laboratory/", "spain_red.glb").then((result) => {
    this.spain_red = this.scene.getMeshByName("spain_red");
  });

  BABYLON.SceneLoader.ImportMeshAsync("spain_yellow", "../../assets/glb/laboratory/", "spain_yellow.glb").then((result) => {
    this.spain_yellow = this.scene.getMeshByName("spain_yellow");
  });

  // OWL

  BABYLON.SceneLoader.ImportMeshAsync("owl", "../../assets/glb/laboratory/", "owl.glb").then((result) => {
  });

  // SHELF

  BABYLON.SceneLoader.ImportMeshAsync("shelf", "../../assets/glb/laboratory/", "shelf.glb", this.scene).then((result) => {
    this.shelf = this.scene.getMeshByName("shelf");
  });

  // DVDS

  this.dvd_pi_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_pi_BAKING.jpg", this.scene, false, false);
  this.dvd_pi_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_pi_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_enter_the_void_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_enter_the_void_BAKING.jpg", this.scene, false, false);
  this.dvd_enter_the_void_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_enter_the_void_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_2001_odyssee_espace_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_2001_odyssee_espace_BAKING.jpg", this.scene, false, false);
  this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_2001_odyssee_espace_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_la_haine_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_la_haine_BAKING.jpg", this.scene, false, false);
  this.dvd_la_haine_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_la_haine_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_sweet_sixteen_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_sweet_sixteen_BAKING.jpg", this.scene, false, false);
  this.dvd_sweet_sixteen_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_sweet_sixteen_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_eternal_sunshine_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_eternal_sunshine_BAKING.jpg", this.scene, false, false);
  this.dvd_eternal_sunshine_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_eternal_sunshine_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_zero_theorem_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_zero_theorem_BAKING.jpg", this.scene, false, false);
  this.dvd_zero_theorem_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_zero_theorem_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.dvd_shining_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_shining_BAKING.jpg", this.scene, false, false);
  this.dvd_shining_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/dvd_shining_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("dvd_pi", "../../assets/glb/laboratory/", "dvd_pi.glb", this.scene).then((result) => {
    this.dvd_pi = this.scene.getMeshByName("dvd_pi");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_enter_the_void", "../../assets/glb/laboratory/", "dvd_enter_the_void.glb", this.scene).then((result) => {
    this.dvd_enter_the_void = this.scene.getMeshByName("dvd_enter_the_void");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_2001_odyssee_espace", "../../assets/glb/laboratory/", "dvd_2001_odyssee_espace.glb", this.scene).then((result) => {
    this.dvd_2001_odyssee_espace = this.scene.getMeshByName("dvd_2001_odyssee_espace");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_la_haine", "../../assets/glb/laboratory/", "dvd_la_haine.glb", this.scene).then((result) => {
    this.dvd_la_haine = this.scene.getMeshByName("dvd_la_haine");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_sweet_sixteen", "../../assets/glb/laboratory/", "dvd_sweet_sixteen.glb", this.scene).then((result) => {
    this.dvd_sweet_sixteen = this.scene.getMeshByName("dvd_sweet_sixteen");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_eternal_sunshine", "../../assets/glb/laboratory/", "dvd_eternal_sunshine.glb", this.scene).then((result) => {
    this.dvd_eternal_sunshine = this.scene.getMeshByName("dvd_eternal_sunshine");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_zero_theorem", "../../assets/glb/laboratory/", "dvd_zero_theorem.glb", this.scene).then((result) => {
    this.dvd_zero_theorem = this.scene.getMeshByName("dvd_zero_theorem");
  });

  BABYLON.SceneLoader.ImportMeshAsync("dvd_shining", "../../assets/glb/laboratory/", "dvd_shining.glb", this.scene).then((result) => {
    this.dvd_shining = this.scene.getMeshByName("dvd_shining");
  });

  // BOOKS

  BABYLON.SceneLoader.ImportMeshAsync("book_strategie_choc", "../../assets/glb/laboratory/", "book_strategie_choc.glb", this.scene).then((result) => {
    this.book_strategie_choc = this.scene.getMeshByName("book_strategie_choc");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_no_logo", "../../assets/glb/laboratory/", "book_no_logo.glb", this.scene).then((result) => {
    this.book_no_logo = this.scene.getMeshByName("book_no_logo");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_serpent_cosmique", "../../assets/glb/laboratory/", "book_serpent_cosmique.glb", this.scene).then((result) => {
    this.book_serpent_cosmique = this.scene.getMeshByName("book_serpent_cosmique");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_meilleur_mondes", "../../assets/glb/laboratory/", "book_meilleur_mondes.glb", this.scene).then((result) => {
    this.book_meilleur_mondes = this.scene.getMeshByName("book_meilleur_mondes");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_dictionnaire_symboles", "../../assets/glb/laboratory/", "book_dictionnaire_symboles.glb", this.scene).then((result) => {
    this.book_dictionnaire_symboles = this.scene.getMeshByName("book_dictionnaire_symboles");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_prince", "../../assets/glb/laboratory/", "book_prince.glb", this.scene).then((result) => {
    this.book_prince = this.scene.getMeshByName("book_prince");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_ca_I", "../../assets/glb/laboratory/", "book_ca_I.glb", this.scene).then((result) => {
    this.book_ca_I = this.scene.getMeshByName("book_ca_I");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_ca_II", "../../assets/glb/laboratory/", "book_ca_II.glb", this.scene).then((result) => {
    this.book_ca_II = this.scene.getMeshByName("book_ca_II");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_ca_III", "../../assets/glb/laboratory/", "book_ca_III.glb", this.scene).then((result) => {
    this.book_ca_III = this.scene.getMeshByName("book_ca_III");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_sagrada_biblia", "../../assets/glb/laboratory/", "book_sagrada_biblia.glb", this.scene).then((result) => {
    this.book_sagrada_biblia = this.scene.getMeshByName("book_sagrada_biblia");
  });
  BABYLON.SceneLoader.ImportMeshAsync("book_nuit_enfants_rois", "../../assets/glb/laboratory/", "book_nuit_enfants_rois.glb", this.scene).then((result) => {
    this.book_nuit_enfants_rois = this.scene.getMeshByName("book_nuit_enfants_rois");
  });

  // WORLD MAP

  BABYLON.SceneLoader.ImportMeshAsync("world_map", "../../assets/glb/laboratory/", "world_map.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("world_map_bar", "../../assets/glb/laboratory/", "world_map_bar.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("world_map_basement_metal", "../../assets/glb/laboratory/", "world_map_basement_metal.glb", this.scene).then((result) => {
  });
  BABYLON.SceneLoader.ImportMeshAsync("world_map_basement_marble", "../../assets/glb/laboratory/", "world_map_basement_marble.glb", this.scene).then((result) => {
  });

  // SOCIAL NETWORKS

  this.social_networks_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/social_networks_BAKING.jpg", this.scene, false, false);
  this.social_networks_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/social_networks_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("social_networks", "../../assets/glb/laboratory/", "social_networks.glb").then((result) => {
    this.social_networks = this.scene.getMeshByName("social_networks");
  });


  // TWITTER

  this.twitter_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/twitter_BAKING.jpg", this.scene, false, false);
  this.twitter_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/twitter_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("twitter", "../../assets/glb/laboratory/", "twitter.glb").then((result) => {
    this.twitter = this.scene.getMeshByName("twitter");
  });

  // INSTAGRAM

  this.instagram_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/instagram_BAKING.jpg", this.scene, false, false);
  this.instagram_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/instagram_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("instagram", "../../assets/glb/laboratory/", "instagram.glb").then((result) => {
    this.instagram = this.scene.getMeshByName("instagram");
  });

  BABYLON.SceneLoader.ImportMeshAsync("instagram_lens", "../../assets/glb/laboratory/", "instagram_lens.glb").then((result) => {
    this.instagram_lens = this.scene.getMeshByName("instagram_lens");
  });

  // YOUTUBE

  this.youtube_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/youtube_BAKING.jpg", this.scene, false, false);
  this.youtube_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/youtube_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.youtube_play_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/youtube_play_BAKING.jpg", this.scene, false, false);
  this.youtube_play_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/youtube_play_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("youtube", "../../assets/glb/laboratory/", "youtube.glb").then((result) => {
      this.youtube = this.scene.getMeshByName("youtube");
  });

  BABYLON.SceneLoader.ImportMeshAsync("youtube_play", "../../assets/glb/laboratory/", "youtube_play.glb").then((result) => {
    this.youtube_play = this.scene.getMeshByName("youtube_play");
  });

  // SPOTIFY

  this.spotify_green_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/spotify_green_BAKING.jpg", this.scene, false, false);
  this.spotify_green_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/spotify_green_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("spotify_green", "../../assets/glb/laboratory/", "spotify_green.glb").then((result) => {
    this.spotify_green = this.scene.getMeshByName("spotify_green");
  });

  BABYLON.SceneLoader.ImportMeshAsync("spotify_black", "../../assets/glb/laboratory/", "spotify_black.glb").then((result) => {
    this.spotify_black = this.scene.getMeshByName("spotify_black");
  });

  // LINKEDIN

  this.linkedin_blue_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/linkedin_blue_BAKING.jpg", this.scene, false, false);
  this.linkedin_blue_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/linkedin_blue_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.linkedin_white_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/linkedin_white_BAKING.jpg", this.scene, false, false);
  this.linkedin_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/linkedin_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("linkedin_blue", "../../assets/glb/laboratory/", "linkedin_blue.glb").then((result) => {
      this.linkedin_blue = this.scene.getMeshByName("linkedin_blue");
  });

  BABYLON.SceneLoader.ImportMeshAsync("linkedin_white", "../../assets/glb/laboratory/", "linkedin_white.glb").then((result) => {
    this.linkedin_white = this.scene.getMeshByName("linkedin_white");
  });

  // FIVERR

  this.fiverr_green_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/fiverr_green_BAKING.jpg", this.scene, false, false);
  this.fiverr_green_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/fiverr_green_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.fiverr_white_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/fiverr_white_BAKING.jpg", this.scene, false, false);
  this.fiverr_white_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/fiverr_white_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("fiverr_green", "../../assets/glb/laboratory/", "fiverr_green.glb").then((result) => {
      this.fiverr_green = this.scene.getMeshByName("fiverr_green");
  });

  BABYLON.SceneLoader.ImportMeshAsync("fiverr_white", "../../assets/glb/laboratory/", "fiverr_white.glb").then((result) => {
    this.fiverr_white = this.scene.getMeshByName("fiverr_white");
  });

  // 3D

  this.threed_cube_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_cube_BAKING.jpg", this.scene, false, false);
  this.threed_cube_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_cube_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  this.threed_scale_BAKING = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_scale_BAKING.jpg", this.scene, false, false);
  this.threed_scale_BAKING_HIGHLIGHT = new BABYLON.Texture("../../assets/glb/laboratory/baking/threed_scale_BAKING_HIGHLIGHT.jpg", this.scene, false, false);

  BABYLON.SceneLoader.ImportMeshAsync("threed_cube", "../../assets/glb/laboratory/", "threed_cube.glb").then((result) => {
    this.threed_cube = this.scene.getMeshByName("threed_cube");
  });

  BABYLON.SceneLoader.ImportMeshAsync("threed_scale", "../../assets/glb/laboratory/", "threed_scale.glb").then((result) => {
    this.threed_scale = this.scene.getMeshByName("threed_scale");
  });

  this.threed_faces_MATERIAL = new BABYLON.StandardMaterial("threed_faces_MATERIAL", this.scene);
  this.threed_faces_MATERIAL.diffuseColor = new BABYLON.Color3(1, 1, 1);
  this.threed_faces_MATERIAL.specularColor = new BABYLON.Color3(1, 1, 1);
  this.threed_faces_MATERIAL.alpha = 0.3;

  BABYLON.SceneLoader.ImportMeshAsync("threed_faces", "../../assets/glb/laboratory/", "threed_faces.glb").then((result) => {
    this.threed_faces = this.scene.getMeshByName("threed_faces");
    this.threed_faces.material = this.threed_faces_MATERIAL;
  });

  // PROJECTOR

  this.projector = BABYLON.MeshBuilder.CreatePlane("projector", {width: 12, height: 6.75}, this.scene);
  this.projector = this.scene.getMeshByName("projector");
  this.projector.position = new BABYLON.Vector3(-32.4 , 13.5, -7);
  this.projector.rotation = new BABYLON.Vector3(0, -1.57, 0);

  this.projector_MATERIAL = new BABYLON.StandardMaterial("projectorMaterial", this.scene);
  this.projector_MATERIAL.diffuseColor = BABYLON.Color3.Black();
  this.projector_MATERIAL.roughness = 1;
  this.projector_MATERIAL.alpha = 0.3;

  this.projector.material = this.projector_MATERIAL;
}

// IS CV

//public set_isCV(isCV): void {
  //this.isCV = isCV;
//}

// WINDOW DIMENSIONS

public set_windowDimensions(width, height) {
  this.innerWidth = width;
  this.innerHeight = height;
}

// IS LOADED

private sceneIsLoaded() {
    if(!this.scene_loaded) {
        this.scene_loaded = true;
        this.interaction.isLoaded.next();
        this.addActions_buttons();
    }
}

// ADD ACTIONS

public addActions_buttons(): void {
  this.addActions_Graphic();
  this.addActions_TransfertBoxes();
  this.addActions_TransfertBoxesRings();
  this.addActions_RoseRouge(); this.addActions_RoseRougeFrame();
  this.addActions_VerbalShoota(); this.addActions_VerbalShootaFrame();
  this.addActions_LapinBlanc(); this.addActions_LapinBlancFrame();
  this.addActions_FourtyFour(); this.addActions_FourtyFourMarieLouise(); this.addActions_FourtyFourFrame();
  this.addActions_Brique(); this.addActions_BriqueMarieLouise(); this.addActions_BriqueFrame();
  this.addActions_Tofu(); this.addActions_TofuMarieLouise(); this.addActions_TofuFrame();
  // this.addActions_ThreedGlassesFrame(); this.addActions_ThreedGlassBlue(); this.addActions_ThreedGlassRed();
  this.addActions_Keyboard(); this.addActions_KeyboardKeyboard();
  this.addActions_MacMini(); this.addActions_Laptop(); this.addActions_LaptopKeyboard(); this.addActions_LaptopScreen(); this.addActions_ScreenCenter(); this.addActions_ScreenFrameCenter(); this.addActions_ScreenRight(); this.addActions_ScreenFrameRight();
  this.addActions_DvdPi(); this.addActions_DvdEnterTheVoid(); this.addActions_Dvd2001OdysseeEspace(); this.addActions_DvdLaHaine(); this.addActions_DvdSweetSixteen(); this.addActions_DvdEternalSunshine(); this.addActions_DvdZeroTheorem(); this.addActions_DvdShining();
  this.addActions_SocialNetworks();
  this.addActions_Twitter();
  this.addActions_Instagram(); this.addActions_InstagramLens();
  this.addActions_Youtube(); this.addActions_YoutubePlay();
  this.addActions_SpotifyGreen(); this.addActions_SpotifyBlack();
  this.addActions_LinkedinBlue(); this.addActions_LinkedinWhite();
  this.addActions_threeDCube(); this.addActions_threeDScale(); this.addActions_threeDFaces();
  this.addActions_UnitedKingdomRed(); this.addActions_UnitedKingdomWhite(); this.addActions_UnitedKingdomBlue();
  this.addActions_FranceBlue(); this.addActions_FranceWhite(); this.addActions_FranceRed();
  this.addActions_SpainRed(); this.addActions_SpainYellow();
  this.addActions_Projector();
}

  public activation_buttons(): void {
    this.graphic.isPickable = true;
    this.transfert_boxes.isPickable = true; this.transfert_boxes_rings.isPickable = true;
    this.rose_rouge.isPickable = true; this.rose_rouge_frame.isPickable = true;
    this.verbal_shoota.isPickable = true; this.verbal_shoota_frame.isPickable = true;
    this.lapin_blanc.isPickable = true;  this.lapin_blanc_frame.isPickable = true;
    this.fourty_four.isPickable = true; this.fourty_four_marie_louise.isPickable = true; this.fourty_four_frame.isPickable = true;
    this.brique.isPickable = true; this.brique_marie_louise.isPickable = true; this.brique_frame.isPickable = true;
    this.tofu.isPickable = true; this.tofu_marie_louise.isPickable = true; this.tofu_frame.isPickable = true;
    // this.threed_glasses_frame.isPickable = true; this.threed_glass_blue.isPickable = true; this.threed_glass_red.isPickable = true;
    this.mac_mini.isPickable = true; this.laptop.isPickable = true; this.laptop_keyboard.isPickable = true; this.laptop_screen.isPickable = true; this.screen_center.isPickable = true; this.screen_frame_center.isPickable = true; this.screen_right.isPickable = true; this.screen_frame_right.isPickable = true;
    this.dvd_pi.isPickable = true; this.dvd_enter_the_void.isPickable = true; this.dvd_2001_odyssee_espace.isPickable = true; this.dvd_la_haine.isPickable = true; this.dvd_sweet_sixteen.isPickable = true; this.dvd_eternal_sunshine.isPickable = true; this.dvd_zero_theorem.isPickable = true; this.dvd_shining.isPickable = true;
    if(!this.isMini) {
      this.social_networks.isPickable = true;
    }
    this.twitter.isPickable = true;
    this.instagram.isPickable = true; this.instagram_lens.isPickable = true;
    this.youtube.isPickable = true; this.youtube_play.isPickable = true;
    this.spotify_green.isPickable = true; this.spotify_black.isPickable = true;
    this.linkedin_blue.isPickable = true; this.linkedin_white.isPickable = true;
    this.threed_cube.isPickable = true; this.threed_scale.isPickable = true; this.threed_faces.isPickable = true;
  }

  public activation_buttonsDevelopment(): void {
    this.mac_mini.isPickable = true; this.laptop.isPickable = true; this.laptop_keyboard.isPickable = true; this.laptop_screen.isPickable = true; this.screen_center.isPickable = true; this.screen_frame_center.isPickable = true; this.screen_right.isPickable = true; this.screen_frame_right.isPickable = true;
  }

  public activation_buttonsDatas(): void {
    this.graphic.isPickable = true;
    this.transfert_boxes.isPickable = true; this.transfert_boxes_rings.isPickable = true;
  }

  public activation_buttonsThreed(): void {
    this.threed_cube.isPickable = true; this.threed_scale.isPickable = true; this.threed_faces.isPickable = true;
  }

  public activation_buttonsARVR(): void {
    this.threed_glasses_frame.isPickable = true; this.threed_glass_blue.isPickable = true; this.threed_glass_red.isPickable = true;
  }

  public activation_buttonsSocialNetworks(): void {
    this.social_networks.isPickable = true;
  }

  public activation_buttonsPhotography(): void {
    this.rose_rouge.isPickable = true; this.rose_rouge_frame.isPickable = true;
    this.verbal_shoota.isPickable = true; this.verbal_shoota_frame.isPickable = true;
    this.lapin_blanc.isPickable = true;  this.lapin_blanc_frame.isPickable = true;
    this.fourty_four.isPickable = true; this.fourty_four_marie_louise.isPickable = true; this.fourty_four_frame.isPickable = true;
    this.brique.isPickable = true; this.brique_marie_louise.isPickable = true; this.brique_frame.isPickable = true;
    this.tofu.isPickable = true; this.tofu_marie_louise.isPickable = true; this.tofu_frame.isPickable = true;
  }

  public activation_buttonsMovies(): void {
    this.dvd_pi.isPickable = true; this.dvd_enter_the_void.isPickable = true; this.dvd_2001_odyssee_espace.isPickable = true; this.dvd_la_haine.isPickable = true; this.dvd_sweet_sixteen.isPickable = true; this.dvd_eternal_sunshine.isPickable = true; this.dvd_zero_theorem.isPickable = true; this.dvd_shining.isPickable = true;
  }

  public activation_buttonsContactMe(): void {

  }

  private desactivation_buttons(): void {
    this.graphic.isPickable = false;
    this.transfert_boxes.isPickable = false;
    this.transfert_boxes_rings.isPickable = false;
    this.rose_rouge.isPickable = false; this.rose_rouge_frame.isPickable = false;
    this.verbal_shoota.isPickable = false; this.verbal_shoota_frame.isPickable = false;
    this.lapin_blanc.isPickable = false; this.lapin_blanc_frame.isPickable = false;
    this.fourty_four.isPickable = false; this.fourty_four_marie_louise.isPickable = false; this.fourty_four_frame.isPickable = false;
    this.brique.isPickable = false; this.brique_marie_louise.isPickable = false; this.brique_frame.isPickable = false;
    this.tofu.isPickable = false; this.tofu_marie_louise.isPickable = false; this.tofu_frame.isPickable = false;
    // this.threed_glasses_frame.isPickable = false; this.threed_glass_blue.isPickable = false; this.threed_glass_red.isPickable = false;
    if(!this.isMini) {
      this.social_networks.isPickable = false;
    }
    this.twitter.isPickable = false;
    this.instagram.isPickable = false; this.instagram_lens.isPickable = false;
    this.youtube.isPickable = false; this.youtube_play.isPickable = false;
    this.spotify_green.isPickable = false; this.spotify_black.isPickable = false;
    this.linkedin_blue.isPickable = false; this.linkedin_white.isPickable = false;
    this.projector.isPickable = false;
    this.dvd_pi.isPickable = false; this.dvd_enter_the_void.isPickable = false; this.dvd_2001_odyssee_espace.isPickable = false; this.dvd_la_haine.isPickable = false, this.dvd_sweet_sixteen.isPickable = false; this.dvd_eternal_sunshine.isPickable = false; this.dvd_zero_theorem.isPickable = false; this.dvd_shining.isPickable = false;
  }

  public desactivation_buttonsDevelopment(): void {
    this.mac_mini.isPickable = false; this.laptop.isPickable = false; this.laptop_keyboard.isPickable = false; this.laptop_screen.isPickable = false; this.screen_center.isPickable = false; this.screen_frame_center.isPickable = false; this.screen_right.isPickable = false; this.screen_frame_right.isPickable = false;
  }

  public desactivation_buttonsDatas(): void {
    this.graphic.isPickable = false;
    this.transfert_boxes.isPickable = false; this.transfert_boxes_rings.isPickable = false;
  }

  public desactivation_buttonsThreed(): void {
    this.threed_cube.isPickable = false; this.threed_scale.isPickable = false; this.threed_faces.isPickable = false;
  }

  public desactivation_buttonsARVR(): void {
    this.threed_glasses_frame.isPickable = false; this.threed_glass_blue.isPickable = false; this.threed_glass_red.isPickable = false;
  }

  public desactivation_buttonsSocialNetworks(): void {
    this.social_networks.isPickable = false;
  }

  public desactivation_buttonsPhotography(): void {
    this.rose_rouge.isPickable = false; this.rose_rouge_frame.isPickable = false;
    this.verbal_shoota.isPickable = false; this.verbal_shoota_frame.isPickable = false;
    this.lapin_blanc.isPickable = false;  this.lapin_blanc_frame.isPickable = false;
    this.fourty_four.isPickable = false; this.fourty_four_marie_louise.isPickable = false; this.fourty_four_frame.isPickable = false;
    this.brique.isPickable = false; this.brique_marie_louise.isPickable = false; this.brique_frame.isPickable = false;
    this.tofu.isPickable = false; this.tofu_marie_louise.isPickable = false; this.tofu_frame.isPickable = false;
  }

  public desactivation_buttonsMovies(): void {
    this.dvd_pi.isPickable = false; this.dvd_enter_the_void.isPickable = false; this.dvd_2001_odyssee_espace.isPickable = false; this.dvd_la_haine.isPickable = false; this.dvd_sweet_sixteen.isPickable = false; this.dvd_eternal_sunshine.isPickable = false; this.dvd_zero_theorem.isPickable = false; this.dvd_shining.isPickable = false;
  }

  public desactivation_buttonsContactMe(): void {

  }

  private addActions_Graphic() {
    this.graphic.isPickable = true;
    this.graphic.actionManager = new BABYLON.ActionManager(this.scene);

    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING_HIGHLIGHT));
    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING));

    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING_HIGHLIGHT));
    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING));

    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING_HIGHLIGHT));
    this.graphic.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING));

    this.graphic.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.graphic},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_datas.next())
        ]
      )
    );
  }

  private addActions_TransfertBoxes() {
    this.transfert_boxes.isPickable = true;
    this.transfert_boxes.actionManager = new BABYLON.ActionManager(this.scene);

    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING_HIGHLIGHT));
    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING));

    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING_HIGHLIGHT));
    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING));

    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING_HIGHLIGHT));
    this.transfert_boxes.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING));

    this.transfert_boxes.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.transfert_boxes},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_datas.next())
        ]
      )
    );
  }

  private addActions_TransfertBoxesRings() {
    this.transfert_boxes_rings.isPickable = true;
    this.transfert_boxes_rings.actionManager = new BABYLON.ActionManager(this.scene);

    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING_HIGHLIGHT));
    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.graphic.material, "albedoTexture", this.graphic_BAKING));

    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING_HIGHLIGHT));
    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes.material, "albedoTexture", this.transfert_boxes_BAKING));

    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING_HIGHLIGHT));
    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.transfert_boxes_rings.material, "albedoTexture", this.transfert_boxes_rings_BAKING));

    this.transfert_boxes_rings.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.transfert_boxes_rings},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_datas.next())
        ]
      )
    );
  }

  private addActions_RoseRouge() {
    this.rose_rouge.isPickable = true;
    this.rose_rouge.actionManager = new BABYLON.ActionManager(this.scene);

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.rose_rouge.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.rose_rouge},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_RoseRougeFrame() {
    this.rose_rouge_frame.isPickable = true;
    this.rose_rouge_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.rose_rouge_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.rose_rouge_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_VerbalShoota() {
    this.verbal_shoota.isPickable = true;
    this.verbal_shoota.actionManager = new BABYLON.ActionManager(this.scene);

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.verbal_shoota.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.verbal_shoota},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_VerbalShootaFrame() {
    this.verbal_shoota_frame.isPickable = true;
    this.verbal_shoota_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.verbal_shoota_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.verbal_shoota_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_LapinBlanc() {
    this.lapin_blanc.isPickable = true;
    this.lapin_blanc.actionManager = new BABYLON.ActionManager(this.scene);

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.lapin_blanc.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.lapin_blanc},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_LapinBlancFrame() {
    this.lapin_blanc_frame.isPickable = true;
    this.lapin_blanc_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.lapin_blanc_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.lapin_blanc_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_FourtyFour() {
    this.fourty_four.isPickable = true;
    this.fourty_four.actionManager = new BABYLON.ActionManager(this.scene);

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.fourty_four.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.fourty_four},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_FourtyFourMarieLouise() {
    this.fourty_four_marie_louise.isPickable = true;
    this.fourty_four_marie_louise.actionManager = new BABYLON.ActionManager(this.scene);

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.fourty_four_marie_louise.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.fourty_four_marie_louise},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_FourtyFourFrame() {
    this.fourty_four_frame.isPickable = true;
    this.fourty_four_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.fourty_four_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.fourty_four_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.fourty_four_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_Brique() {
    this.brique.isPickable = true;
    this.brique.actionManager = new BABYLON.ActionManager(this.scene);

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.brique.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.brique.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.brique},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_BriqueMarieLouise() {
    this.brique_marie_louise.isPickable = true;
    this.brique_marie_louise.actionManager = new BABYLON.ActionManager(this.scene);

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.brique_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.brique_marie_louise.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.brique_marie_louise},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_BriqueFrame() {
    this.brique_frame.isPickable = true;
    this.brique_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.brique_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.brique_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.brique_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_Tofu() {
    this.tofu.isPickable = true;
    this.tofu.actionManager = new BABYLON.ActionManager(this.scene);

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.tofu.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.tofu.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.tofu},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }


  private addActions_TofuMarieLouise() {
    this.tofu_marie_louise.isPickable = true;
    this.tofu_marie_louise.actionManager = new BABYLON.ActionManager(this.scene);

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.tofu_marie_louise.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.tofu_marie_louise},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
        ]
      )
    );
  }

  private addActions_TofuFrame() {
    this.tofu_frame.isPickable = true;
    this.tofu_frame.actionManager = new BABYLON.ActionManager(this.scene);

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.rose_rouge.material, "albedoTexture", this.rose_rouge_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.verbal_shoota.material, "albedoTexture", this.verbal_shoota_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.lapin_blanc.material, "albedoTexture", this.lapin_blanc_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four.material, "albedoTexture", this.fourty_four_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique.material, "albedoTexture", this.brique_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique.material, "albedoTexture", this.brique_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu.material, "albedoTexture", this.tofu_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.fourty_four_marie_louise.material, "albedoTexture", this.fourty_four_marie_louise_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.brique_marie_louise.material, "albedoTexture", this.brique_marie_louise_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING_HIGHLIGHT));
    this.tofu_frame.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.tofu_marie_louise.material, "albedoTexture", this.tofu_marie_louise_BAKING));

    this.tofu_frame.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.tofu_frame},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_photography.next())
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

  private addActions_Keyboard() {
    this.keyboard.isPickable = true;
    this.keyboard.actionManager = new BABYLON.ActionManager(this.scene);

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.keyboard.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.keyboard},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_KeyboardKeyboard() {
    this.keyboard_keyboard.isPickable = true;
    this.keyboard_keyboard.actionManager = new BABYLON.ActionManager(this.scene);

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.keyboard_keyboard.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.keyboard_keyboard},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_MacMini() {
    this.mac_mini.isPickable = true;
    this.mac_mini.actionManager = new BABYLON.ActionManager(this.scene);

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.mac_mini.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.mac_mini.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.mac_mini},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_Laptop() {
    this.laptop.isPickable = true;
    this.laptop.actionManager = new BABYLON.ActionManager(this.scene);

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.laptop.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.laptop.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.laptop},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_LaptopKeyboard() {
    this.laptop_keyboard.isPickable = true;
    this.laptop_keyboard.actionManager = new BABYLON.ActionManager(this.scene);

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.laptop_keyboard.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.laptop_keyboard.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.laptop_keyboard},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_LaptopScreen() {
    this.laptop_screen.isPickable = true;
    this.laptop_screen.actionManager = new BABYLON.ActionManager(this.scene);

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.laptop_screen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.laptop_screen.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.laptop_screen},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_ScreenCenter() {
    this.screen_center.isPickable = true;
    this.screen_center.actionManager = new BABYLON.ActionManager(this.scene);

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.screen_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.screen_center.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.screen_center},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_ScreenFrameCenter() {
    this.screen_frame_center.isPickable = true;
    this.screen_frame_center.actionManager = new BABYLON.ActionManager(this.scene);

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.screen_frame_center.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.screen_frame_center.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.screen_frame_center},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_ScreenRight() {
    this.screen_right.isPickable = true;
    this.screen_right.actionManager = new BABYLON.ActionManager(this.scene);

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.screen_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.screen_right.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.screen_right},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_ScreenFrameRight() {
    this.screen_frame_right.isPickable = true;
    this.screen_frame_right.actionManager = new BABYLON.ActionManager(this.scene);

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.keyboard.material, "albedoTexture", this.keyboard_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop.material, "albedoTexture", this.laptop_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.laptop_screen.material, "albedoTexture", this.laptop_screen_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_center.material, "albedoTexture", this.screen_center_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.screen_right.material, "albedoTexture", this.screen_right_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING_HIGHLIGHT));
    this.screen_frame_right.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.mac_mini.material, "albedoTexture", this.mac_mini_BAKING));

    this.screen_frame_right.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.screen_frame_right},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_development.next())
        ]
      )
    );
  }

  private addActions_DvdPi() {
    this.dvd_pi.isPickable = true;
    this.dvd_pi.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_pi.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_pi.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_pi},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdEnterTheVoid() {
    this.dvd_enter_the_void.isPickable = true;
    this.dvd_enter_the_void.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_enter_the_void.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_enter_the_void},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_Dvd2001OdysseeEspace() {
    this.dvd_2001_odyssee_espace.isPickable = true;
    this.dvd_2001_odyssee_espace.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_2001_odyssee_espace.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_2001_odyssee_espace},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdLaHaine() {
    this.dvd_la_haine.isPickable = true;
    this.dvd_la_haine.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_la_haine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_la_haine.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_la_haine},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdSweetSixteen() {
    this.dvd_sweet_sixteen.isPickable = true;
    this.dvd_sweet_sixteen.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_sweet_sixteen.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_sweet_sixteen},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdEternalSunshine() {
    this.dvd_eternal_sunshine.isPickable = true;
    this.dvd_eternal_sunshine.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_eternal_sunshine.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_eternal_sunshine},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdZeroTheorem() {
    this.dvd_zero_theorem.isPickable = true;
    this.dvd_zero_theorem.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_zero_theorem.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_zero_theorem},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  private addActions_DvdShining() {
    this.dvd_shining.isPickable = true;
    this.dvd_shining.actionManager = new BABYLON.ActionManager(this.scene);

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.dvd_shining.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.dvd_shining.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.dvd_shining},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }


  private addActions_SocialNetworks() {
    if(!this.isCV) {
      this.social_networks.isPickable = true;
      this.social_networks.actionManager = new BABYLON.ActionManager(this.scene);

      this.social_networks.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.social_networks.material, "albedoTexture", this.social_networks_BAKING_HIGHLIGHT));
      this.social_networks.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.social_networks.material, "albedoTexture", this.social_networks_BAKING));

      this.social_networks.actionManager.registerAction(new BABYLON.CombineAction(
          {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.social_networks},
          [
            new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_socialNetworks.next())
          ]
        )
      );
    }
  }

  private addActions_Twitter() {
    this.twitter.isPickable = true;
    this.twitter.actionManager = new BABYLON.ActionManager(this.scene);

    this.twitter.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.twitter.material, "albedoTexture", this.twitter_BAKING_HIGHLIGHT));
    this.twitter.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.twitter.material, "albedoTexture", this.twitter_BAKING));
    this.twitter.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://twitter.com/Moko_MKLab");
        }
      )
    );
  }

  private addActions_Instagram() {
    this.instagram.isPickable = true;
    this.instagram.actionManager = new BABYLON.ActionManager(this.scene);

    this.instagram.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.instagram.material, "albedoTexture", this.instagram_BAKING_HIGHLIGHT));
    this.instagram.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.instagram.material, "albedoTexture", this.instagram_BAKING));

    this.instagram.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.instagram.com/moko_laboratory/?igshid=1v087bd31r20p");
        }
      )
    );
  }

  private addActions_InstagramLens() {
    this.instagram_lens.isPickable = true;
    this.instagram_lens.actionManager = new BABYLON.ActionManager(this.scene);

    this.instagram_lens.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.instagram.material, "albedoTexture", this.instagram_BAKING_HIGHLIGHT));
    this.instagram_lens.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.instagram.material, "albedoTexture", this.instagram_BAKING));

    this.instagram_lens.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.instagram.com/moko_laboratory/?igshid=1v087bd31r20p");
        }
      )
    );
  }

  private addActions_Youtube() {
    this.youtube.isPickable = true;
    this.youtube.actionManager = new BABYLON.ActionManager(this.scene);

    this.youtube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.youtube.material, "albedoTexture", this.youtube_BAKING_HIGHLIGHT));
    this.youtube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.youtube.material, "albedoTexture", this.youtube_BAKING));

    this.youtube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.youtube_play.material, "albedoTexture", this.youtube_play_BAKING_HIGHLIGHT));
    this.youtube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.youtube_play.material, "albedoTexture", this.youtube_play_BAKING));

    this.youtube.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.youtube.com/channel/UCi50Pr7mvDz79EFFMd0stEQ/playlists");
        }
      )
    );
  }

  private addActions_YoutubePlay() {
    this.youtube_play.isPickable = true;
    this.youtube_play.actionManager = new BABYLON.ActionManager(this.scene);

    this.youtube_play.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.youtube.material, "albedoTexture", this.youtube_BAKING_HIGHLIGHT));
    this.youtube_play.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.youtube.material, "albedoTexture", this.youtube_BAKING));

    this.youtube_play.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.youtube_play.material, "albedoTexture", this.youtube_play_BAKING_HIGHLIGHT));
    this.youtube_play.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.youtube_play.material, "albedoTexture", this.youtube_play_BAKING));

    this.youtube_play.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.youtube.com/channel/UCi50Pr7mvDz79EFFMd0stEQ/playlists");
        }
      )
    );
  }

  private addActions_SpotifyGreen() {
    this.spotify_green.isPickable = true;
    this.spotify_green.actionManager = new BABYLON.ActionManager(this.scene);

    this.spotify_green.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spotify_green.material, "albedoTexture", this.spotify_green_BAKING_HIGHLIGHT));
    this.spotify_green.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spotify_green.material, "albedoTexture", this.spotify_green_BAKING));

    this.spotify_green.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://open.spotify.com/user/21g42fpdhcs6if5nooxgivpsq?si=VFoLaPHTRZSTdEEIb4d0Qw");
        }
      )
    );
  }

  private addActions_LinkedinBlue() {
    this.linkedin_blue.isPickable = true;
    this.linkedin_blue.actionManager = new BABYLON.ActionManager(this.scene);

    this.linkedin_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.linkedin_blue.material, "albedoTexture", this.linkedin_blue_BAKING_HIGHLIGHT));
    this.linkedin_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.linkedin_blue.material, "albedoTexture", this.linkedin_blue_BAKING));

    this.linkedin_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.linkedin_white.material, "albedoTexture", this.linkedin_white_BAKING_HIGHLIGHT));
    this.linkedin_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.linkedin_white.material, "albedoTexture", this.linkedin_white_BAKING));

    this.linkedin_blue.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.linkedin.com/in/federico-desmoulin/");
        }
      )
    );
  }

  private addActions_LinkedinWhite() {
    this.linkedin_white.isPickable = true;
    this.linkedin_white.actionManager = new BABYLON.ActionManager(this.scene);

    this.linkedin_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.linkedin_blue.material, "albedoTexture", this.linkedin_blue_BAKING_HIGHLIGHT));
    this.linkedin_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.linkedin_blue.material, "albedoTexture", this.linkedin_blue_BAKING));

    this.linkedin_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.linkedin_white.material, "albedoTexture", this.linkedin_white_BAKING_HIGHLIGHT));
    this.linkedin_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.linkedin_white.material, "albedoTexture", this.linkedin_white_BAKING));

    this.linkedin_white.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://www.linkedin.com/in/federico-desmoulin/");
        }
      )
    );
  }

  private addActions_SpotifyBlack() {
    this.spotify_black.isPickable = true;
    this.spotify_black.actionManager = new BABYLON.ActionManager(this.scene);

    this.spotify_black.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spotify_green.material, "albedoTexture", this.spotify_green_BAKING_HIGHLIGHT));
    this.spotify_black.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spotify_green.material, "albedoTexture", this.spotify_green_BAKING));

    this.spotify_black.actionManager.registerAction(
      new BABYLON.ExecuteCodeAction({trigger: BABYLON.ActionManager.OnPickTrigger},
        function(event){
          var pickedMesh = event.meshUnderPointer;
          window.open("https://open.spotify.com/user/21g42fpdhcs6if5nooxgivpsq?si=VFoLaPHTRZSTdEEIb4d0Qw");
        }
      )
    );
  }

  private addActions_threeDCube() {
    this.threed_cube.isPickable = true;
    this.threed_cube.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_cube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING_HIGHLIGHT));
    this.threed_cube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING));

    this.threed_cube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING_HIGHLIGHT));
    this.threed_cube.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING));

    this.threed_cube.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_cube},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_threed.next())
        ]
      )
    );
  }

  private addActions_threeDScale() {
    this.threed_scale.isPickable = true;
    this.threed_scale.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_scale.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING_HIGHLIGHT));
    this.threed_scale.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING));

    this.threed_scale.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING_HIGHLIGHT));
    this.threed_scale.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING));

    this.threed_scale.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_scale},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_threed.next())
        ]
      )
    );
  }

  private addActions_threeDFaces() {
    this.threed_faces.isPickable = true;
    this.threed_faces.actionManager = new BABYLON.ActionManager(this.scene);

    this.threed_faces.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING_HIGHLIGHT));
    this.threed_faces.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_cube.material, "albedoTexture", this.threed_cube_BAKING));

    this.threed_faces.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING_HIGHLIGHT));
    this.threed_faces.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.threed_scale.material, "albedoTexture", this.threed_scale_BAKING));

    this.threed_faces.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.threed_faces},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_threed.next())
        ]
      )
    );
  }

  private addActions_UnitedKingdomRed() {
    this.united_kingdom_red.isPickable = true;
    this.united_kingdom_red.actionManager = new BABYLON.ActionManager(this.scene);

    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING_HIGHLIGHT));
    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING));

    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING_HIGHLIGHT));
    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING));

    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING_HIGHLIGHT));
    this.united_kingdom_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING));

    this.united_kingdom_red.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_english.next()));
  }

  private addActions_UnitedKingdomWhite() {
    this.united_kingdom_white.isPickable = true;
    this.united_kingdom_white.actionManager = new BABYLON.ActionManager(this.scene);

    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING_HIGHLIGHT));
    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING));

    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING_HIGHLIGHT));
    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING));

    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING_HIGHLIGHT));
    this.united_kingdom_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING));

    this.united_kingdom_white.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_english.next()));
  }

  private addActions_UnitedKingdomBlue() {
    this.united_kingdom_blue.isPickable = true;
    this.united_kingdom_blue.actionManager = new BABYLON.ActionManager(this.scene);

    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING_HIGHLIGHT));
    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_red.material, "albedoTexture", this.united_kingdom_red_BAKING));

    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING_HIGHLIGHT));
    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_white.material, "albedoTexture", this.united_kingdom_white_BAKING));

    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING_HIGHLIGHT));
    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.united_kingdom_blue.material, "albedoTexture", this.united_kingdom_blue_BAKING));

    this.united_kingdom_blue.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_english.next()));
  }

  private addActions_FranceBlue() {
    this.france_blue.isPickable = true;
    this.france_blue.actionManager = new BABYLON.ActionManager(this.scene);

    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING_HIGHLIGHT));
    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING));

    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING_HIGHLIGHT));
    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING));

    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING_HIGHLIGHT));
    this.france_blue.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING));

    this.france_blue.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_french.next()));
  }

  private addActions_FranceWhite() {
    this.france_white.isPickable = true;
    this.france_white.actionManager = new BABYLON.ActionManager(this.scene);

    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING_HIGHLIGHT));
    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING));

    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING_HIGHLIGHT));
    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING));

    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING_HIGHLIGHT));
    this.france_white.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING));

    this.france_white.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_french.next()));
  }

  private addActions_FranceRed() {
    this.france_red.isPickable = true;
    this.france_red.actionManager = new BABYLON.ActionManager(this.scene);

    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING_HIGHLIGHT));
    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_blue.material, "albedoTexture", this.france_blue_BAKING));

    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING_HIGHLIGHT));
    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_white.material, "albedoTexture", this.france_white_BAKING));

    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING_HIGHLIGHT));
    this.france_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.france_red.material, "albedoTexture", this.france_red_BAKING));

    this.france_red.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_french.next()));
  }

  private addActions_SpainRed() {
    this.spain_red.isPickable = true;
    this.spain_red.actionManager = new BABYLON.ActionManager(this.scene);

    this.spain_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spain_red.material, "albedoTexture", this.spain_red_BAKING_HIGHLIGHT));
    this.spain_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spain_red.material, "albedoTexture", this.spain_red_BAKING));

    this.spain_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spain_yellow.material, "albedoTexture", this.spain_yellow_BAKING_HIGHLIGHT));
    this.spain_red.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spain_yellow.material, "albedoTexture", this.spain_yellow_BAKING));

    this.spain_red.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_spanish.next()));
  }

  private addActions_SpainYellow() {
    this.spain_yellow.isPickable = true;
    this.spain_yellow.actionManager = new BABYLON.ActionManager(this.scene);

    this.spain_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spain_red.material, "albedoTexture", this.spain_red_BAKING_HIGHLIGHT));
    this.spain_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spain_red.material, "albedoTexture", this.spain_red_BAKING));

    this.spain_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.spain_yellow.material, "albedoTexture", this.spain_yellow_BAKING_HIGHLIGHT));
    this.spain_yellow.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.spain_yellow.material, "albedoTexture", this.spain_yellow_BAKING));

    this.spain_yellow.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnPickTrigger,() => this.interaction.change_language_spanish.next()));
  }

  private addActions_Projector() {
    this.projector.isPickable = true;
    this.projector.actionManager = new BABYLON.ActionManager(this.scene);

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_pi.material, "albedoTexture", this.dvd_pi_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_enter_the_void.material, "albedoTexture", this.dvd_enter_the_void_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_2001_odyssee_espace.material, "albedoTexture", this.dvd_2001_odyssee_espace_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_la_haine.material, "albedoTexture", this.dvd_la_haine_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_sweet_sixteen.material, "albedoTexture", this.dvd_sweet_sixteen_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_eternal_sunshine.material, "albedoTexture", this.dvd_eternal_sunshine_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_zero_theorem.material, "albedoTexture", this.dvd_zero_theorem_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOverTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING_HIGHLIGHT));
    this.projector.actionManager.registerAction(new BABYLON.SetValueAction(BABYLON.ActionManager.OnPointerOutTrigger, this.dvd_shining.material, "albedoTexture", this.dvd_shining_BAKING));

    this.projector.actionManager.registerAction(new BABYLON.CombineAction(
        {trigger: BABYLON.ActionManager.OnPickTrigger, parameter: this.projector},
        [
          new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.NothingTrigger, () => this.interaction.open_movies.next())
        ]
      )
    );
  }

  public activation_moviesButtons(): void {
    this.projector.isPickable = true;
    this.dvd_pi.isPickable = true; this.dvd_enter_the_void.isPickable = true; this.dvd_2001_odyssee_espace.isPickable = true; this.dvd_la_haine.isPickable = true, this.dvd_sweet_sixteen.isPickable = true; this.dvd_eternal_sunshine.isPickable = true; this.dvd_zero_theorem.isPickable = true; this.dvd_shining.isPickable = true;
  }

  public desactivation_moviesButtons(): void {
    this.projector.isPickable = false;
    this.dvd_pi.isPickable = false; this.dvd_enter_the_void.isPickable = false; this.dvd_2001_odyssee_espace.isPickable = false; this.dvd_la_haine.isPickable = false, this.dvd_sweet_sixteen.isPickable = false; this.dvd_eternal_sunshine.isPickable = false; this.dvd_zero_theorem.isPickable = false; this.dvd_shining.isPickable = false;
  }

  public play_videoTexture() {
    switch(this.trailer_position) {
      case 1:
        if(!this.all_video_textures_loaded) {
          this.enter_the_void_TEXTURE = new BABYLON.VideoTexture("enter_the_void_TEXTURE","../../assets/videos/enter_the_void.mp4", this.scene);
        }
        this.projector_MATERIAL.diffuseTexture = this.enter_the_void_TEXTURE;
        this.projector_MATERIAL.emissiveColor = BABYLON.Color3.White();
        this.projector.material = this.projector_MATERIAL;
        this.enter_the_void_TEXTURE.video.play();
        break;
      case 2:
        this.pi_TEXTURE.video.play();
        break;
      case 3:
        this.eternal_sunshine_TEXTURE.video.play();
        break;
      case 4:
        this.odyssee_espace_TEXTURE.video.play();
        break;
      case 5:
        this.zero_theorem_TEXTURE.video.play();
        break;
      case 6:
        this.shining_TEXTURE.video.play();
        break;
      case 7:
        this.la_haine_TEXTURE.video.play();
        break;
    }
  }

  public pause_videoTexture() {
    switch(this.trailer_position) {
      case 1:
        this.enter_the_void_TEXTURE.video.pause();
        break;
      case 2:
        this.pi_TEXTURE.video.pause();
        break;
      case 3:
        this.eternal_sunshine_TEXTURE.video.pause();
        break;
      case 4:
        this.odyssee_espace_TEXTURE.video.pause();
        break;
      case 5:
        this.zero_theorem_TEXTURE.video.pause();
        break;
      case 6:
        this.shining_TEXTURE.video.pause();
        break;
      case 7:
        this.la_haine_TEXTURE.video.pause();
        break;
    }
  }

  public skipForward_videoTexture() {
    this.trailer_position++;
    if(this.trailer_position == 8) {
      this.trailer_position = 1;
    }
    switch(this.trailer_position) {
      case 1:
        this.la_haine_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.enter_the_void_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.enter_the_void_TEXTURE.video.play();
        break;
      case 2:
        if(!this.all_video_textures_loaded) {
          this.pi_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/pi.mp4", this.scene);
        }
        this.enter_the_void_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.pi_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.pi_TEXTURE.video.play();
        break;
      case 3:
        if(!this.all_video_textures_loaded) {
          this.eternal_sunshine_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/eternal_sunshine.mp4", this.scene);
        }
        this.pi_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.eternal_sunshine_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.eternal_sunshine_TEXTURE.video.play();
        break;
      case 4:
        if(!this.all_video_textures_loaded) {
          this.odyssee_espace_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/2001_odyssee_espace.mp4", this.scene);
        }
        this.eternal_sunshine_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.odyssee_espace_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.odyssee_espace_TEXTURE.video.play();
        break;
      case 5:
        if(!this.all_video_textures_loaded) {
          this.zero_theorem_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/zero_theorem.mp4", this.scene);
        }
        this.odyssee_espace_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.zero_theorem_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.zero_theorem_TEXTURE.video.play();
        break;
      case 6:
        if(!this.all_video_textures_loaded) {
          this.shining_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/shining.mp4", this.scene);
        }
        this.zero_theorem_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.shining_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.shining_TEXTURE.video.play();
        break;
      case 7:
        if(!this.all_video_textures_loaded) {
          this.la_haine_TEXTURE = new BABYLON.VideoTexture("videoTexture","../../assets/videos/la_haine.mp4", this.scene);
        }
        this.shining_TEXTURE.video.pause();
        this.projector_MATERIAL.diffuseTexture = this.la_haine_TEXTURE;
        this.projector.material = this.projector_MATERIAL;
        this.la_haine_TEXTURE.video.play();
        this.all_video_textures_loaded = true;
        break;
    }
  }

  public mute_videoTexture():void {
    switch(this.trailer_position) {
      case 1:
        this.enter_the_void_TEXTURE.video.muted = !this.enter_the_void_TEXTURE.video.muted;
        break;
      case 2:
        this.pi_TEXTURE.video.muted = !this.pi_TEXTURE.video.muted;
        break;
      case 3:
        this.eternal_sunshine_TEXTURE.video.muted = !this.eternal_sunshine_TEXTURE.video.muted;
        break;
      case 4:
        this.odyssee_espace_TEXTURE.video.muted = !this.odyssee_espace_TEXTURE.video.muted;
        break;
      case 5:
        this.zero_theorem_TEXTURE.video.muted = !this.zero_theorem_TEXTURE.video.muted;
        break;
      case 6:
        this.shining_TEXTURE.video.muted = !this.shining_TEXTURE.video.muted;
        break;
      case 7:
        this.la_haine_TEXTURE.video.muted = !this.la_haine_TEXTURE.video.muted;
        break;
    }
  }

  // INITIAL POSITION CAMERA

  private get_initPositionCamera(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-30, 17, 12);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-60, 35, 25);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-60, 35, 25);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-60, 35, 25);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-55, 30, 25);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-50, 30, 25);
    } else {
      return new BABYLON.Vector3(-50, 22, 25);
    }
  }

  private get_initPositionCameraTarget(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-4, 3, -12);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-8, 7, -12);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-8, 10, -12);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-8, 10, -12);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-4, 3, -12);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(0, -1, -12);
    } else {
      return new BABYLON.Vector3(0, 0, -12);
    }
  }

  // ENTER LABORATORY

  public animation_enterLaboratory() {
    this.animation_camera_enterLaboratory();
    this.animation_cameraTarget_enterLaboratory();
    this.introduction_closed = true;
  }

  private animation_camera_enterLaboratory() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_enterLaboratory', this.universal_camera, 'position', 15, 30, this.universal_camera.position, new BABYLON.Vector3(-16.5, 14, 15), 0, ease);
  }

  private animation_cameraTarget_enterLaboratory() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraTarget_enterLaboratory', this.universal_camera, 'target', 15, 30, this.universal_camera.target, new BABYLON.Vector3(-16.5, 8, -12), 0, ease);
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
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_openCard', this.universal_camera, 'position', 15, 30, this.universal_camera.position, this.get_positionCamera_openCard(), 0, ease);
  }

  private animation_cameraTarget_openCard() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraTarget_openCard', this.universal_camera, 'target', 15, 30, this.universal_camera.target, this.get_positionCameraTarget_openCard(), 0, ease);
  }

  private get_positionCamera_openCard(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-30, 17, 12);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-50, 35, 35);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-50, 35, 35);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-50, 35, 35);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-50, 35, 35);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-50, 35, 35);
    } else {
      return new BABYLON.Vector3(-50, 35, 35);
    }
  }

  private get_positionCameraTarget_openCard(): BABYLON.Vector3 {
    if(this.isMini) {
      return new BABYLON.Vector3(-4, 3, -12);
    } else if(this.innerWidth <= 576 && !this.isMini) {
      return new BABYLON.Vector3(-16, 11, 2);
    } else if(this.innerWidth <= 768 && !this.isMini) {
      return new BABYLON.Vector3(-16, 11, 2);
    } else if(this.innerWidth <= 960 && !this.isMini) {
      return new BABYLON.Vector3(-16, 11, 2);
    } else if(this.innerWidth <= 1140 && !this.isMini) {
      return new BABYLON.Vector3(-14, 11, 2);
    } else if(this.innerWidth <= 1400 && !this.isMini) {
      return new BABYLON.Vector3(-14, 11, 2);
    } else {
      return new BABYLON.Vector3(-14, 11, 2);
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

  // OPEN MOVIES

  public animation_openMovies() {
    this.animation_camera_openMovies();
    this.animation_cameraTarget_openMovies();
  }

  private animation_camera_openMovies() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_openMovies', this.universal_camera, 'position', 15, 30, this.universal_camera.position, new BABYLON.Vector3(0, 22, -3), 0, ease);
  }

  private animation_cameraTarget_openMovies() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_cameraTarget_openMovies', this.universal_camera, 'target', 15, 30, this.universal_camera.target, new BABYLON.Vector3(-32.4, 12, -7), 0, ease);
  }

  // CLOSE MOVIES

  public animation_closeMovies() {
    this.animation_camera_closeMovies();
    this.animation_targetCamera_closeMovies();
  }

  private animation_camera_closeMovies() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_camera_closeMovies', this.universal_camera, 'position', 15, 30, this.universal_camera.position, new BABYLON.Vector3(-16.5, 9, 15), 0, ease);
  }

  private animation_targetCamera_closeMovies() {
    const ease = new BABYLON.CubicEase();
    ease.setEasingMode(BABYLON.EasingFunction.EASINGMODE_EASEINOUT);
    BABYLON.Animation.CreateAndStartAnimation('animation_targetCamera_closeMovies', this.universal_camera, 'target', 15, 30, this.universal_camera.target, new BABYLON.Vector3(-16.2, 5, -12), 0, ease);
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

  // INIT POSITION

  public init_position(): void {
    this.animation_camera_enterLaboratory();
    this.animation_cameraTarget_enterLaboratory();
    this.universal_camera.detachControl();
    this.universal_camera.attachControl(this.canvas);
  }

  // SET isMini

  public set_isMini(isMini):void {
    this.isMini = isMini;
  }

  // ANIMATE

  public animate(): void {
    this.ngZone.runOutsideAngular(() => {
      const rendererLoopCallback = () => {
        this.scene.render();
        this.scene.executeWhenReady(() => this.sceneIsLoaded());
        this.universal_camera.attachControl(this.canvas);
        if(this.universal_camera.position.x < -34 && this.scene_loaded) {
          this.projector.isPickable = false;
        } else if(this.universal_camera.position.x >= -34 && this.scene_loaded){
          this.projector.isPickable = true;
        }
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
}
