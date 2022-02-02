<template>
    <v-form ref="form" v-model="valid" @keyup.native.enter="validate" :max-width="maxwidth">
      <template v-for="property in userProperties">
          <password-text-field 
              v-if="property.propertyName==='password'"
              :key="property.propertyName"
              v-model="finalUser.password"
              :withConfirmation="true" 
              :outlined="true"
              :required="true"
              :clearable="true"
          />
          <v-text-field
            v-else
            :key="property.propertyName"
            :disabled="beDisabled && (!property.editable || !isEditing)"
            v-model="finalUser[property.propertyName]"
            :label="property.propertyLabel"
            :rules="property.propertyRule"
            :prependIcon="property.prependedIcon"
            outlined
            clearable
          ></v-text-field>
      </template>
       <v-row v-if="actionName || resettable">
          <v-col v-if="actionName" cols="12" sm="auto" md="auto">      
            <v-btn block :disabled="!valid ||  loading || !actionEnable" color="success" class="mr-4" @click="validate" :loading="loading">
              {{actionName}}
            </v-btn>
          </v-col>
          <v-col v-if="resettable" cols="12" sm="auto" md="auto">
              <v-btn v-if="resettable" block color="error" @click="reset" :disabled="loading">Reset Form</v-btn>
          </v-col>
          <slot></slot>
      </v-row>
    </v-form>

</template>