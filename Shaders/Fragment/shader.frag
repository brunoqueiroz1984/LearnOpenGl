//-------------------------------------------------
// Fragment Shader
//-------------------------------------------------
#version 460 core
in vec2 TexCoord;

out vec4 FragColor;

uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float mixRatio;
uniform vec3 objectColor;
uniform vec3 lightColor;

void main()
{
   FragColor = vec4(lightColor * objectColor, 1.0f);
}