/*
 * Anchor API
 * # Introduction 이 문서는 KAS\\(Klaytn API Service\\)의 Anchor API를 소개하는 문서입니다. Anchor API는 서비스 체인 데이터의 신뢰성을 보장하기 위해 데이터 신뢰성을 증명할 수 있는 메타데이터를 Klaytn 메인 체인에 전송하는 기능을 제공합니다.  자세한 사용 예시는 [튜토리얼](링크)를 확인하십시오.    # Error Codes  ## 400: Bad Request   | Code | Messages |   | --- | --- |   | 1071010 | data don't exist 1071615 | its value is out of range; size 1072100 | same payload ID or payload was already anchored 1072101 | all configured accounts have insufficient funds |
 *
 * OpenAPI spec version: 1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.16
 *
 * Do not edit the class manually.
 *
 */

;(function(root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['../../ApiClient'], factory)
    } else if (typeof module === 'object' && module.exports) {
        // CommonJS-like environments that support module.exports, like Node.
        module.exports = factory(require('../../ApiClient'))
    } else {
        // Browser globals (root is window)
        if (!root.AnchorApi) {
            root.AnchorApi = {}
        }
        root.AnchorApi.AnchorBlockRequest = factory(root.AnchorApi.ApiClient)
    }
})(this, function(ApiClient) {
    /**
     * The AnchorBlockRequest model module.
     * @module model/AnchorBlockRequest
     * @version 1.0
     */

    /**
     * Constructs a new <code>AnchorBlockRequest</code>.
     * 앵커 블록 요청 스키마
     * @alias module:model/AnchorBlockRequest
     * @class
     * @param operator {String} 오퍼레이터 계정 주소
     * @param payload {Object.<String, Object>} 앵커 데이터. ID 를 설정하지 않는 경우에는 기본적으로 id = SHA256(payload)로 설정됨. string 타입의 id 값을 받으며 string 타입이 아닌 경우 설정하지 않은 것으로 판단함.
     */
    const AnchorBlockRequest = function(operator, payload) {
        this.operator = operator
        this.payload = payload
    }

    /**
     * Constructs a <code>AnchorBlockRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AnchorBlockRequest} obj Optional instance to populate.
     * @return {module:model/AnchorBlockRequest} The populated <code>AnchorBlockRequest</code> instance.
     */
    AnchorBlockRequest.constructFromObject = function(data, obj) {
        if (data) {
            obj = obj || new AnchorBlockRequest()
            if (data.hasOwnProperty('operator')) obj.operator = ApiClient.convertToType(data.operator, 'String')
            if (data.hasOwnProperty('payload')) obj.payload = ApiClient.convertToType(data.payload, { String: Object })
        }
        return obj
    }

    /**
     * 오퍼레이터 계정 주소
     * @member {String} operator
     */
    AnchorBlockRequest.prototype.operator = undefined

    /**
     * 앵커 데이터. ID 를 설정하지 않는 경우에는 기본적으로 id = SHA256(payload)로 설정됨. string 타입의 id 값을 받으며 string 타입이 아닌 경우 설정하지 않은 것으로 판단함.
     * @member {Object.<String, Object>} payload
     */
    AnchorBlockRequest.prototype.payload = undefined

    return AnchorBlockRequest
})
