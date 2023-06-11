//-------------------------------------------------
// Fragment Shader
//-------------------------------------------------
#version 460 core
in vec3 Normal;  
in vec3 FragPos; 

uniform vec3 lightPos; 
uniform sampler2D texture1;
uniform sampler2D texture2;
uniform float mixRatio;
uniform vec3 objectColor;
uniform vec3 lightColor;

out vec4 FragColor;

void main()
{
    // ambient
    float ambientStrength = 0.1;
    vec3 ambient = ambientStrength * lightColor;
  	
    // diffuse 
    vec3 norm = normalize(Normal);
    vec3 lightDir = normalize(lightPos - FragPos);
    float diff = max(dot(norm, lightDir), 0.0);
    vec3 diffuse = diff * lightColor;

    vec3 result = (ambient + diffuse) * objectColor;
	FragColor = vec4(result, 1.0f);
}